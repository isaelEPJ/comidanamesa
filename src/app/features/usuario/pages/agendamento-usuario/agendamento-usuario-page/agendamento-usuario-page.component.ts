import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/auth-pages/model/users.model';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/pt';

@Component({
  selector: 'app-agendamento-usuario-page',
  templateUrl: './agendamento-usuario-page.component.html',
  styleUrls: ['./agendamento-usuario-page.component.css'],
})
export class AgendamentoUsuarioPageComponent implements OnInit {
  user?: UserModel;
  public events: any[];
  public options: any;
  constructor() {}

  ngOnInit(): void {
    const session = sessionStorage.getItem('currentUser');
    if (session) {
      const convertSession = JSON.parse(session);
      this.user = convertSession;
    }

    this.options = {
      Plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      Header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek, timeGridDay',
      },
      editable: false,
    };
    this.events = [
      {
        title: 'Evento 1',
        start: new Date(),
        description: 'Evento 1 desc',
      },
      {
        title: 'Evento 2',
        start: new Date(new Date().getTime() + 86400000 * 1),
        description: 'Evento 2 desc',
      },
      {
        title: 'Evento 3',
        start: new Date(new Date().getTime() + 86400000 * 2),
        end: new Date(new Date().getTime() + 86400000 * 3),
        description: 'Evento 3 desc',
      },
    ];
  }
}
