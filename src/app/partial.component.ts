/*
 * Renders a particular partial of the harmonic series, including
 * its amplitude control and its sine wave curve.
 */
import {
  ChangeDetectionStrategy,
  Component,

} from '@angular/core';


@Component({
  selector: 'hs-partial',
  templateUrl: './partial.component.html',
  styleUrls: ['./partial.component.css'],
  // This is a dumb, stateless component with immutable inputs. We can use
  // OnPush change detection.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialComponent   {


}
