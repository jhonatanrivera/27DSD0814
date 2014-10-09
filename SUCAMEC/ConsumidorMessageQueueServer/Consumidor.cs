using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Messaging; 

namespace ConsumidorMessageQueueServer
{
    public class Consumidor
    {
        public static void Main(string[] args)
        {
            string strRutaCola = @".\private$\Sucamec";
            if (!MessageQueue.Exists(strRutaCola))
                MessageQueue.Create(strRutaCola);
            MessageQueue cola = new MessageQueue(strRutaCola);
            cola.Formatter = new XmlMessageFormatter(new Type[] { typeof(EntidadLicencia) });

            Message[] mensajes = cola.GetAllMessages();            
            for (int i = 0; i < mensajes.Length; i++)
            {
                
                EntidadLicencia licencia = (EntidadLicencia)mensajes[i].Body;
                //Envia datos a la Tienda a traves del Servicio Web
                ServicioTienda.TiendaClient objServicio = new ServicioTienda.TiendaClient();
                objServicio.RecibeSucamec(licencia.intCodSolicitud, licencia.intEstadoLicencia, licencia.strFechaRespuesta,
                                          licencia.intCodSucamec, licencia.strNumeroLicencia, licencia.strEstadoAntecedentePolicial,
                                          licencia.strEstadoAntecedenteJudicial, licencia.strEstadoAntecedentePenal);

                Console.WriteLine("Asunto: " + mensajes[i].Label);
                Console.WriteLine("Estado: " + licencia.intEstadoLicencia + ", Fecha de respuesta: " +
                                   licencia.strFechaRespuesta + ", Codigo Sucamec: " + licencia.intCodSucamec +
                                   ", Código Solicitud: " + licencia.intCodSolicitud + ", Número Licencia: " +
                                   licencia.strNumeroLicencia);
                Console.ReadLine(); 
            }

            cola.Purge();
            

            //Message mensaje = cola.Receive();
            //EntidadLicencia licencia = (EntidadLicencia)mensaje.Body;

            //Envia datos a la Tienda a traves del Servicio Web
            //ServicioTienda.TiendaClient objServicio = new ServicioTienda.TiendaClient();
            //objServicio.RecibeSucamec(licencia.intCodSolicitud, licencia.intEstadoLicencia, licencia.strFechaRespuesta,
            //                          licencia.intCodSucamec, licencia.strNumeroLicencia);

            //Console.WriteLine("Asunto: " + mensaje.Label);
            //Console.WriteLine("Estado: " + licencia.intEstadoLicencia + ", Fecha de respuesta: " +
            //                   licencia.strFechaRespuesta + ", Codigo Sucamec: " + licencia.intCodSucamec +
            //                   ", Código Solicitud: " + licencia.intCodSolicitud + ", Número Licencia: " + 
            //                   licencia.strNumeroLicencia);
            //Console.ReadLine(); 

        }
    }
}
