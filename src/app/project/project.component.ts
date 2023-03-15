import { Component, HostListener, Input } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent {
  @Input() skills: string[] = [];
  @Input() project?: string;
  @Input() code?: string;

  // Image URLs
  @Input() small = "";
  @Input() large = "";

  protected viewportWidth = innerWidth;
  protected readonly desktopBreakpoint = 1440;

  @HostListener("window:resize")
  private onResize() {
    this.viewportWidth = innerWidth;
  }
}
