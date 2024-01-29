let body = document.body
let contenedor_principal = mkObj(body,"contenedor_principal","contenedor_principal")
    let header = mkObj(contenedor_principal,"header","header")
        
            let img_logo_header = mkObjImg(header,"img_logo_header","img_logo_header","./vista/img/logo_header.png")
        
        let img_menu_header = mkObjImg(header,"img_menu_header","img_menu_header","./vista/img/menu_header.png")
            let menu_header = mkObj(img_menu_header,"menu_header","menu_header");flexNone(menu_header);

            placerMenu(img_menu_header,menu_header)

                let menu_header_inicio = mkText(menu_header,"menu_header_elements","menu_header_inicio","Inicio")

                let menu_header_login = mkText(menu_header,"menu_header_elements","menu_header_login","Sistema de Usuarios y Login")

                let menu_header_agenda = mkText(menu_header,"menu_header_elements","menu_header_agenda","Sistema de Agenda")

                let menu_header_cobranza = mkText(menu_header,"menu_header_elements","menu_header_cobranza","Sistemas de registros")

                    document.addEventListener("mouseup",function (event) {
                        if (menu_header_inicio.contains(event.target)) {
                            console.log(event.target)
                            cuerpo.innerHTML=""
                            let img_fondo_cuerpo = mkObjImg(cuerpo,"img_fondo_cuerpo","img_fondo_cuerpo","./vista/img/logo.svg")
                            contenidoInicio()
                        }
                        if (menu_header_login.contains(event.target)) {
                            console.log(event.target)
                            cuerpo.innerHTML=""
                            let img_fondo_cuerpo = mkObjImg(cuerpo,"img_fondo_cuerpo","img_fondo_cuerpo","./vista/img/logo.svg")
                            contenidoLogin()
                        }
                        if (menu_header_agenda.contains(event.target)) {
                            console.log(event.target)
                            cuerpo.innerHTML=""
                            let img_fondo_cuerpo = mkObjImg(cuerpo,"img_fondo_cuerpo","img_fondo_cuerpo","./vista/img/logo.svg")
                            contenidoAgenda()
                        }
                        if (menu_header_cobranza.contains(event.target)) {
                            console.log(event.target)
                            cuerpo.innerHTML=""
                            let img_fondo_cuerpo = mkObjImg(cuerpo,"img_fondo_cuerpo","img_fondo_cuerpo","./vista/img/logo.svg")
                            contenidoTablasFormularios()
                        }
                    })

    let cuerpo = mkObj(contenedor_principal,"cuerpo","cuerpo")
        let img_fondo_cuerpo = mkObjImg(cuerpo,"img_fondo_cuerpo","img_fondo_cuerpo","./vista/img/logo.svg")

        function contenidoInicio() {
            let inicio = mkObj(cuerpo,"inicio","inicio")
                inicio.style.animation="fadeIn .5s forwards"
            let lunakar_inicio = mkObj(inicio,"lunakar_inicio","lunakar_inicio")// ;flexNone(lunakar_inicio);

                let cuerpo_lunakar = mkObj(lunakar_inicio,"cuerpo_lunakar","cuerpo_lunakar")
                    let carrusel_ = mkCarrusel(cuerpo_lunakar,"carrusel_","carrusel_",
                        "vista/video/lunakar_intro.mp4",
                        "vista/video/documents.mp4",
                        "vista/video/logistic.mp4",
                        "vista/video/programmer.mp4",

                    )



                    let contenido_superior_cuerpo_lunakar = mkObj(cuerpo_lunakar,"contenido_superior_cuerpo_lunakar","contenido_superior_cuerpo_lunakar")
                        let contenedor_informacion_lunakar = mkObj(contenido_superior_cuerpo_lunakar,"contenedor_informacion_lunakar","contenedor_informacion_lunakar")
                            let informacion_lunakar_titulo = mkText(contenedor_informacion_lunakar,"informacion_lunakar","informacion_lunakar_titulo","Optimiza tu red de distribución.")
                            let img_lunakar = mkObjImg(contenedor_informacion_lunakar,"img_lunakar","img_lunakar","./vista/img/mapa_mexico.png")
                            let informacion_lunakar_descripcion = mkTextList(contenedor_informacion_lunakar,"informacion_lunakar","informacion_lunakar_descripcion",
                                "Software personalizado.",
                                "Sistemas Administrativos.",
                                "Platafomas web.",
                                "Asistecia de facturación CFDI y CPP.",
                                "Gestión de reportes dinámicos con georutas y geocercas.",
                                "Automatición de bitácora.",
                            )
                            let contenido_inferior_cuerpo_lunakar = mkObj(cuerpo_lunakar,"contenido_inferior_cuerpo_lunakar","contenido_inferior_cuerpo_lunakar")

                                let target_etiqueta_lunakar_contacto_whatsapp = mkTargetBlank(contenido_inferior_cuerpo_lunakar,"target_etiqueta_lunakar_contacto_whatsapp","target_etiqueta_lunakar_contacto_whatsapp","https://wa.me/8131010497")
                                    let etiqueta_lunakar_contacto_whatsapp = mkObj(target_etiqueta_lunakar_contacto_whatsapp,"etiqueta_lunakar","etiqueta_lunakar_contacto")
                                        let tittle_etiqueta_lunakar_contacto_whatsapp = mkText(etiqueta_lunakar_contacto_whatsapp,"tittle_etiqueta_lunakar","tittle_etiqueta_lunakar_contacto_whatsapp","WhatsApp:")
                                        let contenido_etiqueta_lunakar_contacto_whatsapp = mkObjImg(etiqueta_lunakar_contacto_whatsapp,"contenido_etiqueta_lunakar","contenido_etiqueta_lunakar_contacto_whatsapp","./vista/img/whatsapp.png")

                                let target_etiqueta_lunakar_contacto_facebook = mkTargetBlank(contenido_inferior_cuerpo_lunakar,"target_etiqueta_lunakar_contacto_facebook","target_etiqueta_lunakar_contacto_facebook","https://www.facebook.com/profile.php?id=100093958578851")
                                    let etiqueta_lunakar_contacto_facebook = mkObj(target_etiqueta_lunakar_contacto_facebook,"etiqueta_lunakar","etiqueta_lunakar_contacto")
                                        let tittle_etiqueta_lunakar_contacto_facebook = mkText(etiqueta_lunakar_contacto_facebook,"tittle_etiqueta_lunakar","tittle_etiqueta_lunakar_contacto_facebook","Facebook:")
                                        let contenido_etiqueta_lunakar_contacto_facebook = mkObjImg(etiqueta_lunakar_contacto_facebook,"contenido_etiqueta_lunakar","contenido_etiqueta_lunakar_contacto_facebook","./vista/img/facebook.png")

                    let logo = mkObjImg(cuerpo_lunakar,"logo","logo","./vista/img/operador_toon.png")

                    let bienvenida = mkObj(cuerpo_lunakar,"bienvenida","bienvenida")
                        let bienvenida_descripcion = mkTextList(bienvenida,"bienvenida_descripcion","bienvenida_descripcion",
                            "Bienvenido a LunaKar",
                            "Somos un grupo de trabajo enfocado en ofrecer soluciones simples a empresas de logística que comienzan a expandirse.",
                            "En LunaKar nos enfocamos en ofrecer soluciones adaptadas a tus necesidades",
                            "Nuestra filosofía es ayudar a las empresa a mejorar sus tecnologias para reducir sus tareas repetitivas y mejorar la experiencia digital.",
                            "Desarrollamos hermientas útiles de software para tu dia a dia con codigo original elaborado desde 0.",
                            "Ofrecemos servicio de asesoría y administracion remota, asi como servicio de facturación (CFDI con complemento carta porte).",
                            "Realizamos un sistema de alertas de renovaciónes de documentación (verficaciones, tenecias y seguros).",
                            "Teléfono y WhatsApp: <a href='https:\/\/wa.me/8131010497' target='_blank'> 8131010497</a>",
                            "Facebook: <a href='https:\/\/facebook.com/profile.php?id=100093958578851' target='_blank'> facebook.com/profile.php?id=100093958578851</a>",
                        ); let array_descripciones_bienvenida = bienvenida_descripcion.querySelectorAll("p")
        
                        let contenedor_files_tecno = mkObj(bienvenida,"contenedor_files_tecno","contenedor_files_tecno")
                            let img_files = mkObjImg(contenedor_files_tecno,"img_files","img_files","./vista/img/files.png")
                            let img_files_descripcion = mkTextList(contenedor_files_tecno,"img_files_descripcion","img_files_descripcion",
                                "Organiza tu documentación en una plataforma y compartela con tus colegas.",
                                "Automatiza tus reportes.",
                                "Almacena tus datos y accede siempre que lo necesites.",
                                "Genera reportes automaticos en formatos PDF y PNG con diseños establecidos.",
                            )
        
                    let contenido_experiencia = mkObj(cuerpo_lunakar,"contenido_experiencia","contenido_experiencia")
                        let descripcion_general_experiencia = mkTextList(contenido_experiencia,"descripcion_general_experiencia","descripcion_general_experiencia",
                            "Areas de experiencia.",
                            "Elaboracion de plataforma web administrativa para el control de datos globales de empresa logística.",
                            "Automatización de formularios para facilitar y acelerar tareas de captura y generación de reportes.",
                            "Catálogos comerciales con información sistema de cotización automatico.",
                            "Administración general de unidades, facturación CFDI con complemento CARTA PORTE.",
                            "Soporte técnico de manera remota y presencial.",
                        )

                    let contenido_servicio_facturacion = mkTextList(cuerpo_lunakar,"contenido_servicio_facturacion","contenido_servicio_facturacion",
                        "Asistencia remota para facturación CFDI con Complemento Carta Porte",
                        "Asistencia y control de documnetación de unidades.",
                        "¿Eres transportista independiente y requieres un servicio básico y personalizado?",
                        "Nosotros te apoyamos a regular tu documentación para que lleves el control de tus datos y viajes.",
                        "Te canalizamós con aseguradoras competentes para tus operadores, unidades, cargas o lo que necesites (para viaje local, foráneo y extranjero).",
                    )
        
                    let fila_info_carta_porte = mkObj(cuerpo_lunakar,"fila_cuerpo","fila_info_carta_porte")
        
                        let p_info_carta_porte_titulo = mkText(fila_info_carta_porte,"p_info_carta_porte_titulo","","¿QUÉ ES EL CFDI CON COMPLEMENTO CARTA PORTE?")
                        let p_info_carta_porte_descripcion = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion","","El Complemento Fiscal Digital por Internet (CFDI), es un documento oficial que sirve para respaldar las operaciones comerciales y fiscales. Es un comporbante obligatorio para transacciones de compra/venta en servicios de transporte. El CFDI es emitido y respaldado por el SAT como evidencia electrónica para las trasacciones comerciales y fiscales.")
        
                        let img_documentos_toon = mkObjImg(fila_info_carta_porte,"img_documentos_toon","img_documentos_toon","./vista/img/doc_toon.png")
        
                        let p_info_carta_porte_titulo_beneficios = mkText(fila_info_carta_porte,"p_info_carta_porte_titulo","","BENEFICIOS")
                            let p_info_carta_porte_descripcion_beneficios_cumplimiento_fiscal = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Cumplimiento Fiscal: Permite cumplir con obligaciones fiscales para evitar sanciones.")
                            let p_info_carta_porte_descripcion_beneficios_gestion_informacion = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Gestión de Información: Integración datos más precisos.")
                            let p_info_carta_porte_descripcion_beneficios_transparecia_seguridad = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Transparencia y Seguridad: Registro electrónico detallado que evita prácticas fraudelentas e irregularidades en la cadena de suministro.")
        
                        let img_publicidad_lunakar_confianza = mkObjImg(fila_info_carta_porte,"img_publicidad_lunakar_confianza","img_publicidad_lunakar_confianza","./vista/img/publicidad_confianza.png")
        
                        let p_info_carta_porte_titulo_preguntas_frecuentes = mkText(fila_info_carta_porte,"p_info_carta_porte_titulo","","PREGUNTAS FRECUENTES")
        
                            let p_info_carta_porte_descripcion_pregunta_obligados = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","• QUIÉNES ESTÁN OBLIGADOS A EMITIR?")
                            let p_info_carta_porte_descripcion_respuesta_obligados = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Está obligada a emitir CFDI con Complemento Carta Porte, toda persona física o moral que realice operaciones de transporte de cargar a nivel nacional.")
        
                            let p_info_carta_porte_descripcion_pregunta_cuando_emitir = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","• ¿CUÁNDO DEBO EMITIR UN CFDI CON COMPLEMENTO CARTA PORTE")
                            let p_info_carta_porte_descripcion_respuesta_cuando_emitir = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- El CFDI debe ser emitido cuado se realice una operacion de transporte de carga según las dispociciones fiscales vigentes.")
        
                            let p_info_carta_porte_descripcion_pregunta_como_validar = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","• ¿CÓMO VALIDAR LA INFORACIÓN DE CFDI c/ CCP?")
                            let p_info_carta_porte_descripcion_respuesta_como_validar = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Puedes validar la autenticidad de un CFDI con Complemento Carta Porte utiizando los servicios de consulta en linea que ofrece la plataforma del SAT.")
        
                            let p_info_carta_porte_descripcion_pregunta_fuentes = mkText(fila_info_carta_porte,"p_info_carta_porte_titulo","p_titulo_otros_recursos","OTROS RECURSOS")
                                let a_info_dof_cartas_porte = mkTargetBlank(fila_info_carta_porte,"a_info_fuentes","","https://dof.gob.mx/nota_detalle_popup.php?codigo=5419975","• DOF - Diario Oficial de la Federación.")
                                let a_info_informacion_integrada = mkTargetBlank(fila_info_carta_porte,"a_info_fuentes","","http://omawww.sat.gob.mx/cartaporte/paginas/default.htm","• Qué información se integra en el complemento Carta Porte.")
                                let a_info_modificaciones_comp_fiscales = mkTargetBlank(fila_info_carta_porte,"a_info_fuentes","","http://ri.uaemex.mx/handle/20.500.11799/21840","• Modificaciones que han tenido los comprobantes fiscales en México durante los últimos 5 años y sus diferencias.")
        
        
                    let introduccion_inicio = mkObj(cuerpo_lunakar,"introduccion_inicio","introduccion_inicio_intro")
                        introduccion_inicio.innerHTML="<p>Contamos con una gran experiencia en servicios de facturación electrónica, comprometidos en brindar soluciones eficientes y confiables para tus necesidades fiscales. Nuestra amplia experiencia en el campo de la facturación nos ha posicionado como un socio confiable para empresas de diversos sectores y tamaños. En •<span style='font-size:xx-large;color:white;'><span style='color:var(--colorc);'>Luna</span> Kar</span>•, entendemos la importancia de contar con un proceso de facturación ágil, seguro y en cumplimiento con las normativas vigentes. Es por eso que ofrecemos un conjunto completo de servicios diseñados para simplificar y optimizar tu gestión tributaria. Nuestro equipo está dedicado a proporcionarte un servicio personalizado, adaptado a las particularidades de tu empresa o servicios que realizas. Desde la emisión de facturas electrónicas y la generación de CFDI, hasta la gestión de complementos de pago y la asesoría fiscal, estamos aquí para cubrir todas tus necesidades relacionadas con la facturación.</p>"
                    
                    let informacion_cartas_porte = mkObj(cuerpo_lunakar,"informacion_cartas_porte","informacion_cartas_porte")
                        let img_sat = mkObjImg(informacion_cartas_porte,"img_sat","img_sat","./vista/img/logo_sat.png")
        
                        let inf_carta_porte = mkObj(informacion_cartas_porte,"introduccion_inicio","introduccion_inicio_info")
                            let inf_carta_porte_titulo = mkText(inf_carta_porte,"p_inf_cart","p_inf_cart_titulo","INFORMACIÓN REQUERIDA PARA EMITIR CFDI CON COMPLEMETO CARTA PORTE")
                            // function
                            let inf_carta_porte_identificacion_fiscal = mkText(inf_carta_porte,"p_inf_cart","","-- Identificación Fiscal").addEventListener("mouseup",
        
                                function mostrarDescripcionIdFis() {
                                    let cont_descripcion_identificacion_fiscal = mkObj(cont_principal,"cont_descripcion","cont_descripcion_identificacion_fiscal")
                                        let descripcion_identificacion_fiscal = mkPestañaText(cont_descripcion_identificacion_fiscal,"anuncio","descripcion_identificacion_fiscal","Identificación FIscal ¿Qué es?","La Identificacion Fiscal es un documento proporcionado por el SAT","Si deseas obtener más información sobre la Identificación Fiscal","puedes contactarnos y con gusto te atenderemos")
                                        let btn_cdif = document.getElementById("btn_cerrar_descripcion_identificacion_fiscal")
                                        document.addEventListener("mouseup",function(x) {
                                            if (btn_cdif.contains(x.target)) {
                                                cont_descripcion_identificacion_fiscal.remove()
                                            }
                                        })
                                })
        
                            let inf_carta_porte_mercancia = mkText(inf_carta_porte,"p_inf_cart","","-- Información mercancía")
                            let inf_carta_porte_vehiculo_operador = mkText(inf_carta_porte,"p_inf_cart","","-- Información Vehículo / Operador")
        
                    let informacion_contacto = mkObj(cuerpo_lunakar,"fila_cuerpo","fila_cuerpo_info_contacto")
                        
                        let a_img_contacto = mkTargetBlank(informacion_contacto,"a_img_contacto","a_img_contacto","https://wa.me/8131010497")
                            let img_contacto = mkObjImg(a_img_contacto,"img_contacto","img_contacto","./vista/img/whats.png")
        
                        let info_contacto = mkObj(informacion_contacto,"introduccion_inicio")
                            let p_inf_contacto = mkText(info_contacto,"","","Número: (+52) 81 3101 0497")
                    
                            


        }

        function contenidoLogin(){
            let login = mkObj(cuerpo,"login","login")

                let info_contenido = mkTextList(login,"info_contenido","info_contenido",
                    "Sistema de Usuarios.",
                    "Utiliza un sistema de usuarios para establecer jerarquías entre la información de tus trabajadores.",
                    "Asigna permisos para que los usuarios solo puedan acceder a la información que tienen permitida.",
                    "Agiliza tu información centralizándola al alcance de tu mano.",
                )
                
                let pestaña_login = mkObj(login,"pestaña_login","pestaña_login")

                    let img_login = mkObjImg(pestaña_login,"img_login","img_login","./vista/img/user_login.png")
                    let input_usuario = mkObjInput(pestaña_login,"fila_login","input_usuario","text","","Usuario")
                    let input_contraseña = mkObjInputPassword(pestaña_login,"fila_login","input_contraseña","","Contraseña","./vista/img/ver_pass.png")
                    let btn_login = mkObjButton(pestaña_login,"btn_login","btn_login","Login")

                        btn_login.addEventListener("click",function(x) {
                        
                            let in_usuario = input_usuario.querySelector("input").value
                            let in_contraseña = input_contraseña.querySelector("input").value

                            if (in_usuario!=""&&in_contraseña!="") {
                                login.remove()
                                contenidoInicio()                                    
                            } else {
                                if (document.getElementById("cont_aviso_error_peticion")) {
                                    document.getElementById("cont_aviso_error_peticion").remove()
                                }
                                let aviso_datos_vacios = mkAviso(pestaña_login,"aviso_datos_vacios","aviso_datos_vacios","La información no está completa")
                            }
                        })
        }

        function contenidoAgenda() {
            document.title="Lunakar - Agenda"
                let agenda = mkObj(cuerpo,"agenda","agenda")
                    let cont_agenda = mkObj(agenda,"cont_agenda","cont_agenda")

                        let info_contenido = mkTextList(cont_agenda,"info_contenido","info_contenido",
                            "Sistema de Agenda y Calendario.",
                            "Registra la información que necesitas agendar y añade descripciones.",
                            "Implementa un sistema de alertas y jerarquía de datos.",
                            "Controla todas las actividades de tu empresa desde un solo sitio, el tuyo.",
                        )
 
                            let dia_hoy = new Date()
                            let obj_agenda = mkAgenda(cont_agenda,"obj_agenda","obj_agenda","Viajes",
                                dia_hoy,
                                "Clientes",
                                "Unidades",
                                "Repartos",
                                "Proveedores",
                                "Inventario",
                                "Facturación",
                                "Ventas",
                                "Marketing",
                                "Recursos Humanos",
                                "Contabilidad"
                            )

                            obj_agenda.style.animation="fadeIn .5s forwards"
        }

        function contenidoTablasFormularios() {
            let cobranza_diaria = mkObj(cuerpo,"cobranza_diaria","cobranza_diaria")
                let cont_tablas_cobranza_diaria = mkObj(cobranza_diaria,"cont_tablas_cobranza","cont_tablas_cobranza_diaria")
                    let cuerpo_tablas_clientes_cobranza = mkObj(cont_tablas_cobranza_diaria,"cuerpo_tablas_clientes_cobranza","cuerpo_tablas_clientes_cobranza")

                        let info_contenido = mkTextList(cuerpo_tablas_clientes_cobranza,"info_contenido","info_contenido",
                            "Sistemas de captura de datos.",
                            "Tablas de cálculo orientadas a captura de información divida por area de trabajo.",
                            "Combierte y genera tus reportes de manera automática.",
                            "Supervisa la información ingresada en tiempo real.",
                        )

                        
                        let tabla_cobranza_oficina = mkTabla(cuerpo_tablas_clientes_cobranza,"tabla_cobranza","tablaCobranza_viajes_oficina",
                            "Sistema de control centralizado",
                            "25/01/2024",
                            "./modelo/Peticion.php",   
                            "ID",
                            "CLIENTES",
                            "TIPO INDUSTRIA",
                            "VENTAS MENSUALES",
                            "COMPRAS MENSUALES",
                            "GASTOS DE ENTREGA",
                            "GASTOS DE RECUPERACIONES",
                        )
        }



setTimeout(() => {
    contenidoInicio()
}, 725);
