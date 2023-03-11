import { Component } from "@angular/core";

type Skill = Readonly<{
  name: string;
  years: number;
}>;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  protected readonly skills: readonly Skill[] = [
    { name: "HTML", years: 4 },
    { name: "CSS", years: 4 },
    { name: "JavaScript", years: 4 },
    { name: "Accessibility", years: 4 },
    { name: "React", years: 3 },
    { name: "Sass", years: 3 },
  ];
}
