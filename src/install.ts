#!/usr/bin/env node

import * as fs from 'fs-extra';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { Command } from 'commander';
import ora from 'ora';

interface InstallOptions {
  backupOnly?: boolean;
  force?: boolean;
  skipClaudeInstall?: boolean;
}

class ClaudeInstaller {
  private homeDir: string;
  private claudeDir: string;
  private backupDir: string;
  private projectDir: string;

  constructor() {
    this.homeDir = os.homedir();
    this.claudeDir = path.join(this.homeDir, '.claude');
    this.backupDir = path.join(this.homeDir, '.claude-backups');
    this.projectDir = process.cwd();
  }

  async install(options: InstallOptions = {}): Promise<void> {
    console.log(chalk.blue.bold('Claude Orchestration System Installer\n'));

    try {
      // Check if Claude Code is installed
      if (!options.skipClaudeInstall) {
        await this.checkAndInstallClaude();
      }

      // Create backup if existing installation exists
      await this.createBackup();

      if (options.backupOnly) {
        console.log(chalk.green('✅ Backup completed successfully'));
        return;
      }

      // Install agents and commands
      await this.installAgents();
      await this.installCommands();
      await this.installConfig();

      console.log(chalk.green.bold('\n🎉 Installation completed successfully!'));
      console.log(chalk.cyan('\nAvailable commands:'));
      console.log(chalk.white('  /cook                    - Initialize new development task'));
      console.log(chalk.white('  /project:update-linear   - Post progress update'));
      console.log(chalk.white('  /project:complete-task   - Finalize task'));
      console.log(chalk.white('  /project:run-tests       - Execute test suite'));
      console.log(chalk.white('  /project:deploy          - Deploy to environments'));

    } catch (error) {
      console.error(chalk.red('❌ Installation failed:'), error);
      process.exit(1);
    }
  }

  private async checkAndInstallClaude(): Promise<void> {
    const spinner = ora('Checking Claude Code installation...').start();

    try {
      execSync('claude --version', { stdio: 'pipe' });
      spinner.succeed('Claude Code is already installed');
    } catch (error) {
      spinner.text = 'Installing Claude Code...';
      
      try {
        // Try npm install first
        execSync('npm install -g @anthropic-ai/claude-code', { stdio: 'pipe' });
        spinner.succeed('Claude Code installed via npm');
      } catch (npmError) {
        try {
          // Fallback to curl install
          execSync('curl -fsSL https://claude.ai/install.sh | sh', { stdio: 'pipe' });
          spinner.succeed('Claude Code installed via curl');
        } catch (curlError) {
          spinner.fail('Failed to install Claude Code automatically');
          console.log(chalk.yellow('\nPlease install Claude Code manually:'));
          console.log(chalk.white('  npm install -g @anthropic-ai/claude-code'));
          console.log(chalk.white('  or visit: https://claude.ai/code'));
          throw new Error('Claude Code installation required');
        }
      }
    }
  }

  private async createBackup(): Promise<void> {
    const spinner = ora('Creating backup of existing installation...').start();

    try {
      if (await fs.pathExists(this.claudeDir)) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupPath = path.join(this.backupDir, `backup-${timestamp}`);
        
        await fs.ensureDir(this.backupDir);
        await fs.copy(this.claudeDir, backupPath);
        
        spinner.succeed(`Backup created: ${backupPath}`);
      } else {
        spinner.succeed('No existing installation found');
      }
    } catch (error) {
      spinner.fail('Backup failed');
      throw error;
    }
  }

  private async installAgents(): Promise<void> {
    const spinner = ora('Installing agents...').start();

    try {
      const agentsSourceDir = path.join(this.projectDir, 'agents');
      const agentsTargetDir = path.join(this.claudeDir, 'agents');

      await fs.ensureDir(agentsTargetDir);
      
      if (await fs.pathExists(agentsSourceDir)) {
        await fs.copy(agentsSourceDir, agentsTargetDir, { overwrite: true });
        
        const agentFiles = await fs.readdir(agentsSourceDir);
        const agentCount = agentFiles.filter(file => file.endsWith('.md')).length;
        
        spinner.succeed(`Installed ${agentCount} agents`);
      } else {
        spinner.warn('No agents directory found in project');
      }
    } catch (error) {
      spinner.fail('Agent installation failed');
      throw error;
    }
  }

  private async installCommands(): Promise<void> {
    const spinner = ora('Installing commands...').start();

    try {
      const commandsSourceDir = path.join(this.projectDir, 'commands');
      const commandsTargetDir = path.join(this.claudeDir, 'commands');

      await fs.ensureDir(commandsTargetDir);
      
      if (await fs.pathExists(commandsSourceDir)) {
        await fs.copy(commandsSourceDir, commandsTargetDir, { overwrite: true });
        
        const commandFiles = await fs.readdir(commandsSourceDir);
        const commandCount = commandFiles.filter(file => file.endsWith('.md')).length;
        
        spinner.succeed(`Installed ${commandCount} commands`);
      } else {
        spinner.warn('No commands directory found in project');
      }
    } catch (error) {
      spinner.fail('Command installation failed');
      throw error;
    }
  }

  private async installConfig(): Promise<void> {
    const spinner = ora('Installing configuration...').start();

    try {
      // Copy CLAUDE.md to ~/.claude/
      const claudeMdSource = path.join(this.projectDir, 'CLAUDE.md');
      const claudeMdTarget = path.join(this.claudeDir, 'CLAUDE.md');
      
      if (await fs.pathExists(claudeMdSource)) {
        await fs.copy(claudeMdSource, claudeMdTarget, { overwrite: true });
      }

      // Copy MCP servers configuration if it exists
      const mcpConfigSource = path.join(this.projectDir, 'mcp-servers.json');
      const mcpConfigTarget = path.join(this.claudeDir, 'mcp-servers.json');
      
      if (await fs.pathExists(mcpConfigSource)) {
        await fs.copy(mcpConfigSource, mcpConfigTarget, { overwrite: true });
      }

      spinner.succeed('Configuration installed');
    } catch (error) {
      spinner.fail('Configuration installation failed');
      throw error;
    }
  }

  async listBackups(): Promise<void> {
    try {
      if (await fs.pathExists(this.backupDir)) {
        const backups = await fs.readdir(this.backupDir);
        
        if (backups.length === 0) {
          console.log(chalk.yellow('No backups found'));
          return;
        }

        console.log(chalk.blue.bold('Available backups:\n'));
        for (const backup of backups.sort().reverse()) {
          const backupPath = path.join(this.backupDir, backup);
          const stats = await fs.stat(backupPath);
          console.log(chalk.white(`  ${backup} (${stats.mtime.toLocaleString()})`));
        }
      } else {
        console.log(chalk.yellow('No backup directory found'));
      }
    } catch (error) {
      console.error(chalk.red('Failed to list backups:'), error);
    }
  }

  async restoreBackup(backupName: string): Promise<void> {
    const spinner = ora(`Restoring backup: ${backupName}...`).start();

    try {
      const backupPath = path.join(this.backupDir, backupName);
      
      if (!await fs.pathExists(backupPath)) {
        spinner.fail(`Backup not found: ${backupName}`);
        return;
      }

      // Remove current installation
      if (await fs.pathExists(this.claudeDir)) {
        await fs.remove(this.claudeDir);
      }

      // Restore from backup
      await fs.copy(backupPath, this.claudeDir);
      
      spinner.succeed(`Backup restored: ${backupName}`);
    } catch (error) {
      spinner.fail('Backup restoration failed');
      throw error;
    }
  }
}

// CLI Setup
const program = new Command();

program
  .name('claude-installer')
  .description('Install and manage Claude orchestration system')
  .version('1.0.0');

program
  .command('install')
  .description('Install agents and commands to ~/.claude')
  .option('--backup-only', 'Only create backup, skip installation')
  .option('--force', 'Force installation without prompts')
  .option('--skip-claude-install', 'Skip Claude Code installation check')
  .action(async (options: InstallOptions) => {
    const installer = new ClaudeInstaller();
    await installer.install(options);
  });

program
  .command('backup')
  .description('Create backup of current installation')
  .action(async () => {
    const installer = new ClaudeInstaller();
    await installer.install({ backupOnly: true });
  });

program
  .command('list-backups')
  .description('List available backups')
  .action(async () => {
    const installer = new ClaudeInstaller();
    await installer.listBackups();
  });

program
  .command('restore')
  .description('Restore from backup')
  .argument('<backup-name>', 'Name of backup to restore')
  .action(async (backupName: string) => {
    const installer = new ClaudeInstaller();
    await installer.restoreBackup(backupName);
  });

// Parse CLI arguments
program.parse();