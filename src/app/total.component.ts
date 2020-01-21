/*
 * Renders the total resulting curve of the harmonic series
 */
import {
  ChangeDetectionStrategy,
  Component,

  Input,

} from '@angular/core';

@Component({
  selector: 'hs-total',
  templateUrl: './partial.component.html',
  styleUrls: ['./partial.component.css'],
  // This is a dumb, stateless component with immutable inputs. We can use
  // OnPush change detection.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalComponent {
  @Input() gain: number;
  @Input() partials: Number[];


}
