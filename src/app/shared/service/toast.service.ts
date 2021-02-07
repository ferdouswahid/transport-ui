import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  successToast(msg): void {
    this.show(msg, { classname: 'bg-success text-light', delay: 5000 });
  }
  failedToast(msg): void {
    this.show(msg, { classname: 'bg-danger text-light', delay: 5000 });
  }

  showAllToast(dangerTpl): void {
    this.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
    this.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
    this.show('I am a success toast', { classname: 'bg-warning text-light', delay: 10000 });
    this.show('I am a success toast', { classname: 'bg-danger text-light', delay: 10000 });
    this.show('I am a success toast', { classname: 'bg-primary text-light', delay: 10000 });
  }
}
