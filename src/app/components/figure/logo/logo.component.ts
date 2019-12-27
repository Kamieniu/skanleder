import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <figure class="app-logo">
      <svg
        class="app-logo__svg"
        [ngClass]="{
          'app-logo__svg--black': type == 'black',
          'app-logo__svg--white': type == 'white'
        }"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="140.146"
        height="23.678"
        viewBox="0 0 140.146 23.678"
      >
        <defs>
          <filter id="a" x="0" y="0" width="140.146" height="23.678" filterUnits="userSpaceOnUse">
            <feOffset input="SourceAlpha" />
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feFlood flood-opacity="0.102" />
            <feComposite operator="in" in2="b" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#a)">
          <path
            d="M10.225-3.965A3.691,3.691,0,0,1,8.833-.918,6.045,6.045,0,0,1,4.961.2,9.094,9.094,0,0,1,.918-.664V-3.477a16.661,16.661,0,0,0,2.446.908A7.239,7.239,0,0,0,5.2-2.3a2.6,2.6,0,0,0,1.528-.381,1.3,1.3,0,0,0,.532-1.133,1.251,1.251,0,0,0-.234-.747,2.623,2.623,0,0,0-.688-.63,17.707,17.707,0,0,0-1.851-.967A8.771,8.771,0,0,1,2.52-7.344,4.436,4.436,0,0,1,1.475-8.662a3.762,3.762,0,0,1-.391-1.758A3.69,3.69,0,0,1,2.368-13.4a5.336,5.336,0,0,1,3.55-1.084,8.383,8.383,0,0,1,2.124.264,14.6,14.6,0,0,1,2.114.742L9.18-11.123a14.288,14.288,0,0,0-1.89-.654,6.082,6.082,0,0,0-1.47-.186,1.946,1.946,0,0,0-1.318.4,1.321,1.321,0,0,0-.459,1.045,1.293,1.293,0,0,0,.186.7,2.04,2.04,0,0,0,.591.576,18.268,18.268,0,0,0,1.919,1A7.635,7.635,0,0,1,9.482-6.323,3.745,3.745,0,0,1,10.225-3.965ZM26.3,0H22.859l-3.74-6.016L17.84-5.1V0H14.813V-14.277H17.84v6.533l1.191-1.68L22.9-14.277h3.359l-4.98,6.318ZM38.834,0,37.8-3.4H32.594L31.559,0H28.3l5.039-14.336h3.7L42.1,0ZM37.076-5.937q-1.436-4.619-1.616-5.225t-.259-.957q-.322,1.25-1.846,6.182ZM58.559,0H54.711L48.5-10.8h-.088q.186,2.861.186,4.082V0H45.893V-14.277h3.818l6.2,10.693h.068q-.146-2.783-.146-3.936v-6.758h2.725Zm5.594,0V-14.277H67.18V-2.5h5.791V0ZM85.674,0H77.451V-14.277h8.223v2.48h-5.2v3.135h4.834v2.48H80.479V-2.5h5.2ZM102.5-7.275a7.031,7.031,0,0,1-2.007,5.4A8.184,8.184,0,0,1,94.7,0H90.652V-14.277h4.482a7.548,7.548,0,0,1,5.43,1.846A6.789,6.789,0,0,1,102.5-7.275ZM99.354-7.2q0-4.6-4.062-4.6H93.68v9.3h1.3Q99.354-2.5,99.354-7.2ZM115.68,0h-8.223V-14.277h8.223v2.48h-5.2v3.135h4.834v2.48h-4.834V-2.5h5.2Zm8.006-7.939h.977a3.736,3.736,0,0,0,2.119-.479,1.708,1.708,0,0,0,.684-1.5,1.562,1.562,0,0,0-.7-1.445,4.237,4.237,0,0,0-2.163-.43h-.918Zm0,2.461V0h-3.027V-14.277h4.16a7.12,7.12,0,0,1,4.307,1.06,3.782,3.782,0,0,1,1.4,3.218,3.788,3.788,0,0,1-.693,2.241,4.588,4.588,0,0,1-1.963,1.538q3.223,4.814,4.2,6.221h-3.359L125.3-5.479Z"
            transform="translate(3.58 18.98)"
            fill="#fff"
          />
        </g>
      </svg>
    </figure>
  `,
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  @Input() public readonly type: 'black' | 'white';
}