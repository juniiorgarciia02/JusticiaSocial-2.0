import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RecargasComponent } from './recargas/recargas.component';
import { RecargasPostComponent } from './recargas-post/recargas-post.component';
import { PaqueticosComponent } from './paqueticos/paqueticos.component';
import { PaqueticoPostComponent } from './paquetico-post/paquetico-post.component';
import { PagaFacilComponent } from './paga-facil/paga-facil.component';
import { PagaFacilServComponent } from './paga-facil/paga-facil-serv/paga-facil-serv.component';
import { PagaFacilServPostComponent } from './paga-facil/paga-facil-serv-post/paga-facil-serv-post.component';
import { PagaFacilAnularComponent } from './paga-facil/paga-facil-anular/paga-facil-anular.component';
import { SegurosComponent } from './seguros/seguros.component';
import { VenderSegurosComponent } from './seguros/vender-seguros/vender-seguros.component';
import { ConsultarSeguroComponent } from './seguros/consultar-seguro/consultar-seguro.component';
import { PlanesSeguroComponent } from './seguros/planes-seguro/planes-seguro.component';
import { RemesasComponent } from './remesas/remesas.component';
import { RemesasEnviarComponent } from './remesas/remesas-enviar/remesas-enviar.component';
import { RemesasEnviarDestinatarioComponent } from './remesas/remesas-enviar-destinatario/remesas-enviar-destinatario.component';
import { RecibirRemesaComponent } from './remesas/recibir-remesa/recibir-remesa.component';
import { ResuelveYaComponent } from './resuelve-ya/resuelve-ya.component';
import { EnviarResuelveYaComponent } from './resuelve-ya/enviar-resuelve-ya/enviar-resuelve-ya.component';
import { EntregarResuelveYaComponent } from './resuelve-ya/entregar-resuelve-ya/entregar-resuelve-ya.component';
import { ReporteResuelveYaComponent } from './resuelve-ya/reporte-resuelve-ya/reporte-resuelve-ya.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { GiftCardCompraComponent } from './gift-card/gift-card-compra/gift-card-compra.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReporteDetalladoComponent } from './reportes/reporte-detallado/reporte-detallado.component';
import { ReporteDepositoComponent } from './reportes/reporte-deposito/reporte-deposito.component';
import { ReporteResumidoComponent } from './reportes/reporte-resumido/reporte-resumido.component';
import { ReportePagoComponent } from './reportes/reporte-pago/reporte-pago.component';
import { ReporteCodigosComponent } from './reportes/reporte-codigos/reporte-codigos.component';
import { AnularComponent } from './anular/anular.component';
import { SIMComponent } from './sim/sim.component';
import { SoporteComponent } from './soporte/soporte.component';
import { LoginComponent } from './login/login.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { DetalleSupervisorComponent } from './detalle-supervisor/detalle-supervisor.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'provincias',
        component: ProvinciasComponent,
    },
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: 'recargas',
        component: RecargasComponent,
    },
    {
        path: 'DetalleSupervisor',
        component:   DetalleSupervisorComponent,
    },
  
    {
        path: 'Supervisor',
        component: SupervisorComponent,
    },
    {
        path: 'recargasPost',
        component: RecargasPostComponent,
    },
    {
        path: 'paqueticos',
        component: PaqueticosComponent,
    },
    {
        path: 'paqueticosPost',
        component: PaqueticoPostComponent,
    },
    {
        path: 'pagaFacil',
        component: PagaFacilComponent,
    },
    {
        path: 'pagaFacilServ',
        component: PagaFacilServComponent,
    },
    {
        path: 'pagaFacilServPago',
        component: PagaFacilServPostComponent,
    },
    {
        path: 'pagaFacilAnular',
        component: PagaFacilAnularComponent,
    },
    {
        path: 'seguros',
        component: SegurosComponent,
    },
    {
        path: 'venderSeguros',
        component: VenderSegurosComponent,
    },
    {
        path: 'consultarSeguro',
        component: ConsultarSeguroComponent,
    },
    {
        path: 'planesSeguro',
        component: PlanesSeguroComponent,
    },
    {
        path: 'remesas',
        component: RemesasComponent,
    },
    {
        path: 'enviarRemesa',
        component: RemesasEnviarComponent,
    },
    {
        path: 'remesasEnviarDestinatario',
        component: RemesasEnviarDestinatarioComponent,
    },
    {
        path: 'recibirRemesa',
        component: RecibirRemesaComponent,
    },
    {
        path: 'resuelveYa',
        component: ResuelveYaComponent,
    },
    {
        path: 'enviarResuelveYa',
        component: EnviarResuelveYaComponent,
    },
    {
        path: 'entregarResuelveYa',
        component: EntregarResuelveYaComponent,
    },
    {
        path: 'reporteResuelveYa',
        component: ReporteResuelveYaComponent,
    },
    {
        path: 'giftCard',
        component: GiftCardComponent,
    },
    {
        path: 'giftCardCompra',
        component: GiftCardCompraComponent,
    },
    {
        path: 'reportes',
        component: ReportesComponent,
    },
    {
        path: 'reporteDetallado',
        component: ReporteDetalladoComponent,
    },
    {
        path: 'reporteDeposito',
        component: ReporteDepositoComponent,
    },
    {
        path: 'reporteResumido',
        component: ReporteResumidoComponent,
    },
    {
        path: 'reportePago',
        component: ReportePagoComponent,
    },
    {
        path: 'reporteCodigos',
        component: ReporteCodigosComponent,
    },
    {
        path: 'anular',
        component: AnularComponent,
    },
    {
        path: 'sim',
        component: SIMComponent,
    },
    {
        path: 'soporte',
        component: SoporteComponent,
    }
    
    
   
];
