import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-3xl">
      <div class="ds-section-kicker">
        <span>{{ index() }}</span>
        <span class="hidden h-px w-12 bg-[var(--app-border-strong)] sm:block"></span>
      </div>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight text-[var(--app-heading)] sm:text-4xl">
        {{ title() }}
      </h2>
      @if (description()) {
        <p class="mt-4 text-base leading-7 text-[var(--app-text-soft)] sm:text-lg">
          {{ description() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly index = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string>('');
}
