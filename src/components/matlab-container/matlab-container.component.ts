import { Component } from "@angular/core";

import { User } from "../../model/user"; 

interface ToolStringIcon {
    icon: string;
    desc: string;
}

@Component({
    selector: "hack-container",
    templateUrl: "./matlab-container.component.html",
    styleUrls: ["./matlab-container.component.scss"]
})
export class MatlabContainerComponent {
    toolStripIcons: ToolStringIcon[] = [
        {
            icon: "",
            desc: ""
        }
    ];

    users: User[] = [];
}
