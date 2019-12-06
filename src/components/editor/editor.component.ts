import { Component, Input, Output } from "@angular/core";
import { NgxEditorModel } from 'ngx-monaco-editor';

interface CodeLine {
    line: string;
}

@Component({
    selector: "hack-editor",
    templateUrl: "./editor.component.html",
    styleUrls: ["./editor.component.scss"]
})
export class EditorComponent {
    // code: CodeLine[] = [
    //     {
    //         line: ""
    //     }
    // ];
    code = "";
    isShared: boolean = true;
    model: NgxEditorModel = {
        value: this.code,
        language: 'js',
      };
    editorOptions = {theme: 'vs-dark', language: 'javascript'};

    // onContentKey($event, id) {
    //     if ($event.which === 13) {
    //         this.code.splice(id + 1, 0, {
    //             line: ""
    //         });
    //         event.preventDefault();
    //     }
    // }

    onCodeChange($event) {
        // -- TODO --
    }

    updateUserFlags() {
        
    }
}
