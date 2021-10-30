
import * as vscode from 'vscode';
import {ViewPane} from "./SidePanel";


export function activate(context: vscode.ExtensionContext) {
	

	console.log('Congratulations, your extension "taskmanager" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand("taskmanager.tasklogs",() => {
		ViewPane.createOrShow(context.extensionUri);
	}));
	
}

export function deactivate() {}
