import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { map, take } from "rxjs";
import { LibraryAccessService } from "../services/library-access.service";
@Injectable({ providedIn: "root" })
export class LibraryGuard implements CanActivate {
  constructor(private access: LibraryAccessService) {}
  canActivate() {
    return this.access.canManage$.pipe(take(1), map(Boolean));
  }
}
