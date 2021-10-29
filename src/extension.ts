
import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	

	console.log('Congratulations, your extension "taskmanager" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand("taskmanager.tasklogs",async () => {
		const answer = await vscode.window.showInformationMessage(
			"There are currently no tasks in this workspace",
			"create");
	}));
	
}

export function deactivate() {}
