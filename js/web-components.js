// ------------------------------------------------ Веб-компоненты ---------------------------------------------

// ----------------------------------- Пользовательские элементы (Custom Elements) ----------------------------------------------
{
  /* <time-formatted
	datetime="2019-12-01"
	year="numeric"
	month="long"
	day="numeric"
	hour="numeric"
	minute="numeric"
	second="numeric"
	time-zone-name="short"
></time-formatted> */
}
// class TimeFormatted extends HTMLElement {
//   // (1)

//   connectedCallback() {
//     let date = new Date(this.getAttribute('datetime') || Date.now());
// 		console.log('date: ', date);

// 		console.log(this);

//     this.innerHTML = new Intl.DateTimeFormat('default', {
//       year: this.getAttribute('year') || undefined,
//       month: this.getAttribute('month') || undefined,
//       day: this.getAttribute('day') || undefined,
//       hour: this.getAttribute('hour') || undefined,
//       minute: this.getAttribute('minute') || undefined,
//       second: this.getAttribute('second') || undefined,
//       timeZoneName: this.getAttribute('time-zone-name') || undefined,
//     }).format(date);
//   }
// }

// customElements.define('time-formatted', TimeFormatted);

{
  /* <user-card>
  <span slot="username">Иван Иванов</span>
  <span slot="birthday">01.01.2001</span>
</user-card>;

customElements.define(
  'user-card',
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <div>Имя:
        <slot name="username"></slot>
      </div>
      <div>Дата рождения:
        <slot name="birthday"></slot>
      </div>
    `;
    }
  }
); */
}
