function div(c,i,inner) { 
    c?true:c=""
    i?true:i=""
    inner?true:inner=""

    let div = document.createElement("div")
    c=""?true:div.setAttribute("class",c)
    i=""?true:div.setAttribute("id",i)
    inner=""?true:div.innerHTML=inner

    return div
}
/**f */
function video(c,i,s,inner) {
    c?true:c=""
    i?true:i=""
    s?true:s=""
    inner?true:inner=""

    let video = document.createElement("video")
    c=""?true:video.setAttribute("class",c)
    i=""?true:video.setAttribute("id",i)
    i=""?true:video.setAttribute("src",s)

    return video
}


function videoLoop(c,i,s,inner) {
    c?true:c=""
    i?true:i=""
    s?true:s=""
    inner?true:inner=""

    let video = document.createElement("video")
    c=""?true:video.setAttribute("class",c)
    i=""?true:video.setAttribute("id",i)
    i=""?true:video.setAttribute("src",s)
    video.autoplay = true;
    video.loop = true;  
    video.muted = true;  

    return video
}

function img(c,i,src) {
    c?true:c=""
    i?true:i=""
    src?true:src=""
    let img = document.createElement("img")
    c=""?true:img.setAttribute("class",c)
    i==""?true:img.setAttribute("id",i)
    src=""?true:img.setAttribute("src",src)

    return img
}

function input(c,i,p) {
    c?true:c=""
    i?true:i=""
    p?true:p=""
    let input = document.createElement("input")
    c=""?true:input.setAttribute("class",c)
    i=""?true:input.setAttribute("id",i)
    p=""?true:input.setAttribute("placeholder",p)
    return input
}

function textarea(c,i,p) {
    c?true:c=""
    i?true:i=""
    p?true:p=""
    let textarea = document.createElement("textarea")
    c=""?true:textarea.setAttribute("class",c)
    i=""?true:textarea.setAttribute("id",i)
    p=""?true:textarea.setAttribute("placeholder",p)
    return textarea
}

function button(c,i,inner) {
    c?true:c=""
    i?true:i=""
    inner?true:inner=""
    let button = document.createElement("button")
    c=""?true:button.setAttribute("class",c)
    i=""?true:button.setAttribute("id",i)
    inner=""?true:button.innerHTML=inner

    return button
}
/////////
function flex(f){
    f.style.display="flex"
    return f
}
function flexNone(f) {
    f.style.display="none"
    return f
}
function mkObj(n,obj_class,obj_id,inner) { // nodo objHTML, clase del objeto (str), clse del id (str), inner

    n?true:n=""
    obj_class?true:obj_class=""
    obj_id?true:obj_id=""
    inner?true:inner=""

    let obj_temp=div(obj_class,obj_id,inner)
    n.appendChild(obj_temp)
    return obj_temp
}

function mkObjVideo(n,c,i,s,inner) {
    n?true:n=""
    c?true:c=""
    i?true:i=""
    s?true:s=""
    inner?true:inner=""

    let obj_temp = mkObj(n,"cont_"+c,"cont_"+i)

        let video_temp = video(c,i,s)
    obj_temp.appendChild(video_temp)

    return obj_temp
}

function mkObjVideoLoop(n,c,i,s,inner) {
    n?true:n=""
    c?true:c=""
    i?true:i=""
    s?true:s=""
    inner?true:inner=""

    let obj_temp = mkObj(n,"cont_"+c,"cont_"+i)

        let video_temp = videoLoop(c,i,s)
    obj_temp.appendChild(video_temp)

    return obj_temp
}




function mkObjImg(n,img_class,img_id,src_) {
    n?true:n=""
    img_class?true:img_class=""
    img_id?true:img_id=""
    src_?true:src_=""

    img_class?cont_img_class="cont_"+img_class:cont_img_class=""
    img_id?cont_img_id="cont_"+img_id:cont_img_id=""


    let obj_temp=div(cont_img_class,cont_img_id)
    n.appendChild(obj_temp)

    img_class?img_class=img_class:img_class=""
    img_id?img_id=img_id:img_id=""

    let img_temp = img(img_class,img_id,src_)
    obj_temp.appendChild(img_temp)

    return obj_temp
}

function mkObjInput(nodo,c,i,type,t,p){ // nodo, clase, id, tipo, titulo input, placeholder
    nodo?true:nodo=""
    c?true:c=""
    i?true:i=""
    t?true:t=""
    p?true:p=""
    c?cont_clase="cont_input_"+c:cont_clase=""
    i?cont_id="cont_input_"+i:cont_id=""
    c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase=""
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id=""
    c?titulo_clase="tittle_"+c:titulo_clase=""
    i?titulo_id="tittle_"+i:titulo_id=""
    c?nodo_cont_input_class="nodo_cont_input_"+c:nodo_cont_input_class=""
    i?nodo_cont_input_id="nodo_cont_input_"+i:nodo_cont_input_id=""
    c?cont_input_clase="cont_in_"+c:cont_input_clase=""
    i?cont_input_id="cont_in_"+i:cont_input_id=""
    c?input_clase="in_"+c:input_clase=""
    i?input_id="in_"+i:input_id=""
    input_placeholder=p

    let obj_temp = div(c,i)
    nodo.appendChild(obj_temp)
        let cont_temp = div(cont_clase,cont_id)
        obj_temp.appendChild(cont_temp)
            let cont_titulo = div(cont_titulo_clase,cont_titulo_id)
            cont_temp.appendChild(cont_titulo)
                let titulo_temp = mkText(cont_titulo,titulo_clase,titulo_id,t)

            let nodo_cont_input = div(nodo_cont_input_class,nodo_cont_input_id)
            cont_temp.appendChild(nodo_cont_input)
                let cont_input = div(cont_input_clase,cont_input_id)
                nodo_cont_input.appendChild(cont_input)
                    let input_temp = input(input_clase,input_id,p)
                    input_temp.setAttribute("type",type)
                    cont_input.appendChild(input_temp)

    return obj_temp
}

function mkObjInputPassword(nodo,c,i,t,p,url){ //nono clase id titulo placeholder
    nodo?true:nodo=""
    c?true:c=""
    i?true:i=""
    t?true:t=""
    p?true:p=""


    c?cont_clase="cont_input_"+c:cont_clase=""
    i?cont_id="cont_input_"+i:cont_id=""


    c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase=""
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id=""

    c?titulo_clase="tittle_"+c:titulo_clase=""
    i?titulo_id="tittle_"+i:titulo_id=""

    c?nodo_cont_input_class="nodo_cont_input_"+c:nodo_cont_input_class=""
    i?nodo_cont_input_id="nodo_cont_input_"+i:nodo_cont_input_id=""

    c?cont_input_clase="cont_in_"+c:cont_input_clase=""
    i?cont_input_id="cont_in_"+i:cont_input_id=""

    c?input_clase="in_"+c:input_clase=""
    i?input_id="in_"+i:input_id=""

    c?img_ver_pass_clase="ver_pass_"+c:img_ver_pass_clase=""
    i?img_ver_pass_id="ver_pass_"+i:img_ver_pass_id=""

    input_placeholder=p

    c?ver_pass_clase="ver_pass_"+c:ver_pass_clase=""
    i?ver_pass_id="ver_pass_"+i:ver_pass_id=""

    let obj_temp = div(c,i)
    nodo.appendChild(obj_temp)

        let cont_temp = div(cont_clase,cont_id)
        obj_temp.appendChild(cont_temp)

            let cont_titulo = div(cont_titulo_clase,cont_titulo_id)
            cont_temp.appendChild(cont_titulo)

                let titulo_temp = mkText(cont_titulo,titulo_clase,titulo_id,t)

                //
            let obj_cont_input = div(nodo_cont_input_class,nodo_cont_input_id)
            cont_temp.appendChild(obj_cont_input)
                //

            let cont_input = div(cont_input_clase,cont_input_id)
            obj_cont_input.appendChild(cont_input)

                let input_temp = input(input_clase,input_id,p)
                input_temp.setAttribute("type","password")
                cont_input.appendChild(input_temp)

            let ver_pass = div(ver_pass_clase,ver_pass_id)
            obj_cont_input.appendChild(ver_pass)

                let img_ver_pass = mkObjImg(ver_pass,"img_"+img_ver_pass_clase,"img_"+img_ver_pass_id,url)

                toggleVerContraseña(img_ver_pass)

                function toggleVerContraseña(x) {
                    let obj_temp = document.getElementById(x.getAttribute("id"))

                    obj_temp.addEventListener("mouseup",function () {
                        let style_temp = window.getComputedStyle(obj_temp).backgroundColor
                        console.log(style_temp)
                        if (style_temp==="rgb(255, 255, 255)") {
                            obj_temp.style.background="var(--colorButtonToggle)"
                        } else {
                            obj_temp.style.background="white"
                        }
                    })

                }

                ver_pass.addEventListener("mouseup",function() {
                    if (input_temp.type==="password"){
                        input_temp.type = "text"
                    } else{
                        input_temp.type = "password"
                    }
                })

    return obj_temp
}

function mkObjTextarea(nodo,c,i,t,p){ // nodo, clase, id, tipo, titulo textarea, placeholder
    nodo?true:nodo=""
    c?true:c=""
    i?true:i=""
    t?true:t=""
    p?true:p=""
    c?cont_clase="cont_textarea_"+c:cont_clase=""
    i?cont_id="cont_textarea_"+i:cont_id=""
    c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase=""
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id=""
    c?titulo_clase="tittle_"+c:titulo_clase=""
    i?titulo_id="tittle_"+i:titulo_id=""
    c?nodo_cont_textarea_class="nodo_cont_textarea_"+c:nodo_cont_textarea_class=""
    i?nodo_cont_textarea_id="nodo_cont_textarea_"+i:nodo_cont_textarea_id=""
    c?cont_textarea_clase="cont_in_"+c:cont_textarea_clase=""
    i?cont_textarea_id="cont_in_"+i:cont_textarea_id=""
    c?textarea_clase="in_"+c:textarea_clase=""
    i?textarea_id="in_"+i:textarea_id=""
    textarea_placeholder=p

    let obj_temp = div(c,i)
    nodo.appendChild(obj_temp)
        let cont_temp = div(cont_clase,cont_id)
        obj_temp.appendChild(cont_temp)
            let cont_titulo = div(cont_titulo_clase,cont_titulo_id)
            cont_temp.appendChild(cont_titulo)
                let titulo_temp = mkText(cont_titulo,titulo_clase,titulo_id,t)

            let nodo_cont_textarea = div(nodo_cont_textarea_class,nodo_cont_textarea_id)
            cont_temp.appendChild(nodo_cont_textarea)
                let cont_textarea = div(cont_textarea_clase,cont_textarea_id)
                nodo_cont_textarea.appendChild(cont_textarea)
                    let textarea_temp = textarea(textarea_clase,textarea_id,p)
                    cont_textarea.appendChild(textarea_temp)

    return obj_temp
}

function mkObjButton(nodo,c,i,inner) {
    nodo?true:nodo=""
    c?true:c=""
    i?true:i=""
    inner?true:inner=""

    let btn_temp = button(c,i,inner)

    c=""?true:cont_btn_class="cont_"+c
    i=""?true:cont_btn_id="cont_"+i

    let obj_temp = div(cont_btn_class,cont_btn_id)



    /// ->
    nodo.appendChild(obj_temp)
        obj_temp.appendChild(btn_temp)

    return obj_temp
}

function validarStr(x,inner) {
    let ex = /^[a-zA-Z0-9/s']+$/
    let nodo = x.parentNode
    let c = x.getAttribute("class")
    let i = x.getAttribute("id")
    if (document.getElementById("aviso_formulario_"+i)) {
        document.getElementById("aviso_formulario_"+i).remove()
    }
    if (x.value=="") {
        document.getElementById("aviso_formulario_"+i).remove()
    }
    if (!ex.test(x.value)) {
        let aviso_formulario = div("aviso_formulario_"+c,"aviso_formulario_"+i,inner)
        nodo.appendChild(aviso_formulario)
        x.style.border="none"
        x.style.borderBottom="solid 1px red"
    } else {
        x.style.border="solid 1px #10101043"
    }
}

function mostrarPestaña(x,c) { // objeto a mostrar, contenedor en el que se encuentra la pestaña
    let pestañas_array = c.querySelectorAll(".pestaña")
    for (let i = 0; i < pestañas_array.length; i++) {
        pestañas_array[i].style.display="none"
    }
    x.style.display="flex"
}

function checkAndDeleteId(x) {
    if (document.getElementById(x)) {
        document.getElementById(x).remove()
    }
}

function confirmarPass(x,y){
    let nodo_x = x.parentNode
    let nodo_y = y.parentNode


    if (x.value==y.value) {
        checkAndDeleteId("aviso_formulario_contraseña")
        checkAndDeleteId("aviso_formulario_confirmar_contraseña")

        x.style.border="solid 1px #10101088"
        y.style.border="solid 1px #10101088"
    } else {
        checkAndDeleteId("aviso_formulario_contraseña")
        checkAndDeleteId("aviso_formulario_confirmar_contraseña")

        let aviso_x = div("aviso_formulario","aviso_formulario_contraseña","Las contraseñas no coinciden")
        nodo_x.appendChild(aviso_x)
        let aviso_y = div("aviso_formulario","aviso_formulario_confirmar_contraseña","Las contraseñas no coinciden")
        nodo_y.appendChild(aviso_y)

        x.style.border="none"
        x.style.borderBottom="solid 1px red"
        y.style.border="none"
        y.style.borderBottom="solid 1px red"
    }
}

function mkText(n,c,i,inner) {
    n = n || ""
    c = c || ""
    i = i || ""
    inner = inner || ""

    c==""?c_c="":c_c="cont_"+c
    i==""?c_i="":c_i="cont_"+i

    let obj_temp = div(c_c,c_i)
    n.appendChild(obj_temp)

    let p_temp = document.createElement("p")
    p_temp.setAttribute("class",c)
    p_temp.setAttribute("id",i)
    p_temp.innerHTML=inner
    obj_temp.appendChild(p_temp)

    return obj_temp

}

function mkDoubleText(n,c,i,...inner) {
    n = n || ""
    c = c || ""
    i = i || ""
    inner = inner || ""

    c==""?c_c="":c_c="cont_"+c
    i==""?c_i="":c_i="cont_"+i

    let obj_temp = mkObj(n,c_c,c_i)
    
    for (let j = 0; j < inner.length; j++) {
        let cell_double_text = mkText(obj_temp,"cell_double_text_"+c,"cell_double_text_"+i,inner[j])
    }

    return obj_temp

}

function mkTargetBlank(n,c,i,url,inner) {
    n = n || ""
    c = c || ""
    i = i || ""
    url = url || ""
    inner = inner || ""
    let obj_temp = document.createElement("a")
    obj_temp.setAttribute("target","_blank")
    obj_temp.setAttribute("class",c)
    obj_temp.setAttribute("id",i)
    obj_temp.setAttribute("href",url)
    obj_temp.innerHTML=inner
    n.appendChild(obj_temp)
    return obj_temp
}
function eliminarObj(x) {
    if (x) {
        x.remove()
    }
    return x
}

function mathConcat(input_element) {
    let math_simbols = /[+\-*\/]/;

    input_element.addEventListener("blur", function () {
        if (math_simbols.test(input_element.value)) {
            input_element.value = eval(input_element.value);
        }
    });

    return input_element;
}

function invertContent(x) {

    let array = Array.from(x.childNodes)
    array.reverse()

    while (x.firstChild) {
        x.removeChild(x.firstChild)
    }

    array.forEach(function (element) {
        x.appendChild(element)
    })

    console.log(array)
}


// Actualizado: [SI] | Acutalizando en: [mkDomer/controlador/bibliotecaPruebas.js]
    // MODIFICACIONES: [cambio de funciones div() por mkObj()]
        // MODIFICACIONES: [se añaden atributos a traves de Styler]
        function mkPestañaText(n,c,i,t,...inner) { // ! CREAR UNA PESTAÑA QUE CONTIENE TEXTO (USO RECOMENDADO EN ALERTAS DE FORMULARIO)
            n=n||"";c=c||"";i=i||"";t=t||"";inner=inner||"";c==""?p_c="":p_c="pestaña_"+c;i==""?p_i="":p_i="pestaña_"+i;
            c==""?h_c="":h_c="header_"+c;i==""?h_i="":h_i="header_"+i;c==""?t_c="":t_c="tittle_"+c;i==""?t_i="":t_i="tittle_"+i;
            c==""?btn_c="":btn_c="btn_cerrar_"+c;i==""?btn_i="":btn_i="btn_cerrar_"+i;c==""?crp_c="":crp_c="cuerpo_"+c;
            i==""?crp_i="":crp_i="cuerpo_"+i;c==""?tf_c="":tf_c="cuerpo_"+c;i==""?tf_i="":tf_i="cuerpo_"+i;
        
            let obj_p = mkObj(n,p_c,p_i)
                stylerFlexDirection(obj_p,"column")
                stylerHeight(obj_p,"min-content")
                stylerWidth(obj_p,"max-content")
                stylerMaxWidth(obj_p,"100%")
                stylerBackground(obj_p,"white")
                stylerPadding(obj_p,"6px")
        
                let obj_h = mkObj(obj_p,h_c,h_i)
                    stylerHeight(obj_h,"min-content")
        
                    let obj_t = mkText(obj_h,t_c,t_i,t)
                        stylerAlingItems(obj_t,"center")
                        stylerMaxWidth(obj_t,"100%")
        
        
                    let cont_obj_btn_close = mkObj(obj_t,"cont_"+btn_c,"cont_"+btn_i)
                        stylerPadding(cont_obj_btn_close,"3px")
                        stylerJustifyContent(cont_obj_btn_close,"end")
        
                        let obj_btn_close = mkObj(cont_obj_btn_close,btn_c,btn_i,"x")
                            stylerUserSelect(obj_btn_close,"none")
                            stylerAlingItems(obj_btn_close,"center")
                            stylerJustifyContent(obj_btn_close,"center")
                            stylerCursor(obj_btn_close,"pointer")
                            stylerBackground(obj_btn_close,"var(--colorBtnClose)")
                            stylerColor(obj_btn_close,"white")
                            stylerFontSize(obj_btn_close,"18px")
                            stylerHeight(obj_btn_close,"min-content")
                            stylerWidth(obj_btn_close,"min-content")
                            stylerPadding(obj_btn_close,"4px")
        
                            obj_btn_close.addEventListener("mouseup",function() {
                                obj_p.remove()
                            })
        
        
                let obj_crp = mkObj(obj_p,crp_c,crp_i)
                    stylerFlexDirection(obj_crp,"column")
        
                    for (let j = 0; j < inner.length; j++) {
                        let obj_p_crp = mkText(obj_crp,tf_c+inner[j],tf_i+inner[j],inner[j])
                            stylerPadding(obj_p_crp,"4px")
                    }
        
            return obj_p
        }
        
    function mkPestañaTablaGeneral(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
        n?n:n=""
        c?c:c=""
        i?i:i=""
        t?t:t=""
        f?f:f=""
        ///PANEL
        c==""?panel_c="":panel_c="panel_"+c
        i==""?panel_i="":panel_i="panel_"+i
            //HEADER
            c==""?h_c="":h_c="header_"+c
            i==""?h_i="":h_i="header_"+i
                //TITULO
                c==""?t_c="":t_c="titulo_"+c
                i==""?t_i="":t_i="titulo_"+i
            //CUERPO
            c==""?crp_c="":crp_c="cuerpo_"+c
            i==""?crp_i="":crp_i="cuerpo_"+i
                //HEADER CUERPO
                c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
                i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                    //COLUMNA CUERPO
                    c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                    i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
                //CUERPO CONTENIDO
                c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
                i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i
            //FOOTER
            c==""?foo_c="":foo_c="footer_"+c
            i==""?foo_i="":foo_i="footer_"+i
                //DESCRIPCION FOOTER
                c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
                i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
                //BOTON ADD
                c==""?btn_add_c="":btn_add_c="btn_add_"+c
                i==""?btn_add_i="":btn_add_i="btn_add_"+i
                    //VENTANA ADD
                    c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                    i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                        //VENTANA ADD
                        c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                        i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                            //CUERPO VENTANA ADD
                            c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                            i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                            //FOOTER VENTANA ADD
                            c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                            i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                                //BUTTON ENVIAR FORMULARIO
                                c==""?btn_env_form_c="":btn_env_form_c="btn_eviar_forumalrio_ventana_add_"+c
                                i==""?btn_env_form_i="":btn_env_form_i="btn_eviar_forumalrio_ventana_add_"+i

        ////// FILTRO DIAS
        let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
        let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
        let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
        let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
        let d, m, y
        let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

        if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
            if (expresion_regular_1_invert.test(f)) {
                [y, m, d] = f.split("-").map(Number);
              }
            if (expresion_regular_2_invert.test(f)) {
                [y, m, d] = f.split("/").map(Number);
            }
        }

        if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
          if (expresion_regular_1.test(f)) {
            [d, m, y] = f.split("-").map(Number);
          }
          if (expresion_regular_2.test(f)) {
            [d, m, y] = f.split("/").map(Number);
          }
        }

        fecha_ = new Date(y, m - 1, d)
        fecha_.setUTCHours(0, 0, 0, 0)
        fecha_ = fecha_.toISOString()
        // console.log(fecha_)


        //////

        let obj_temp = mkObj(n,panel_c,panel_i)
            let obj_h = mkObj(obj_temp,h_c,h_i)
                let obj_t = mkText(obj_h,t_c,t_i,t)

            let obj_crp = mkObj(obj_temp,crp_c,crp_i)

                let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                    //CREAR TITULO DE COLUMNAS
                    for (let j = 0; j < columnas.length; j++) {
                        let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j],columnas[j])
                    }

                let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)

                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("nombre_operador",t.toLowerCase())

                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) {
                        console.log(peticion_elemento.response)
                        let res_pe = peticion_elemento.response
                            res_pe = res_pe.replace(/"/g,"")
                            res_pe = res_pe.replace(/ 00:00:00/g,"")
                            res_pe = res_pe.replace(/\[/g,"")
                            res_pe = res_pe.replace(/\]/g,"")
                            res_pe = res_pe.split(",")
                        for (let j = 0; j < res_pe.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,element_crp_cont_i+j)

                            let formData = new FormData()
                            formData.append("fecha",res_pe[j])

                            let peticion_contenido = new XMLHttpRequest()
                            peticion_contenido.open("POST",url_)
                            peticion_contenido.send(formData)
                            peticion_contenido.onreadystatechange=function() {
                                if (peticion_contenido.readyState==4&&peticion_contenido.status==200) {
                                    let res = peticion_contenido.response
                                    console.log(res)
                                        res = res.replace(/"/g,"")
                                        res = res.replace(/ 00:00:00/g,"")
                                        res = res.replace(/\[/g,"")
                                        res = res.replace(/\]/g,"")
                                        res = res.split(",")
                                    for (let j_ = 0; j_ < res.length; j_++) {
                                        let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_"+col_elementos_crp_cont_i+"_"+res[j_],res[j_])
                                    }
                                }
                            }
                    }



                    }
                }

            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

                btn_add.addEventListener("click",function() {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }
                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    // console.log(array_in_column)
                                    button_enviar.addEventListener("mouseup",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                console.log(res_peticion_addElemeto)
                                            }
                                        }
                                    })
                })

        return obj_temp
    }
    // ACTUALIZADO [NO]
        // GEST AÑADIENDO COMPLEMENTO DE MATHCONCAT function mathConcat(input_element) {

// GEST        let math_simbols = /[+\-*\/]/;

// GEST        input_element.addEventListener("blur", function () {
// GEST            if (math_simbols.test(input_element.value)) {
// GEST                input_element.value = eval(input_element.value);
// GEST            }
// GEST        });

// GEST        return input_element;


function mkPestañaTablaTags(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n=""
    c?c:c=""
    i?i:i=""
    t?t:t=""
    f?f:f=""
    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()
    // // console.log(fecha_)

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j],columnas[j])
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("nombre_operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() { //PETICION FILA
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);

                        let divs = []

                        for (let j = 0; j < datos.length; j++) {

                                
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let valor_celda = datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")]
                                if (valor_celda===0) {valor_celda="0"}

                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,valor_celda) // correccion: hay que asegurarse de que los valores esten bien represntados para evitar problemas al momento de llamar al contenido de la celda

                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                            }



                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                            let array_contenido_p_elementos = []
                            let array_columnas = []
                            for (let j2 = 0; j2 < contenido_p_elementos.length; j2++) {
                                array_contenido_p_elementos.push(contenido_p_elementos[j2].innerHTML)
                                array_columnas.push(contenido_p_elementos[j2].getAttribute("cell_class"))
                            }

                            /////////////////////////
                            /// AGREGAR UN ELEMENTO

                            // console.log(array_contenido_p_elementos)

                            obj_elemento_crp_cont.addEventListener("mouseup",function () { // update_element
                                // console.log(array_contenido_p_elementos)
                                let cont_update_row_element = mkObj(obj_crp_cont,"cont_update_row_element_"+c,"cont_update_row_element_"+i)
                                    let header_cont_update_row_element = mkObj(cont_update_row_element,"header_cont_update_row_element_"+c,"header_cont_update_row_element_"+i)
                                        let tittle_update_element = mkText(header_cont_update_row_element,"tittle_update_element","tittle_update_element","Actualizar Elemento.")
                                        let btn_cerrar_ventana_update = mkObj(header_cont_update_row_element,"btn_cerrar_ventana_update","btn_cerrar_ventana_update_"+i,"~")
                                        btn_cerrar_ventana_update.addEventListener("mouseup",()=>{
                                            cont_update_row_element.remove()
                                        })

                                    let cuerpo_header_cont_update_row_element = mkObj(cont_update_row_element,"cuerpo_header_cont_update_row_element_"+c,"cuerpo_header_cont_update_row_element"+i)

                                    for (let j3 = 0; j3 < array_contenido_p_elementos.length; j3++) {
                                        let input_update_elemento = mkObjInput(cuerpo_header_cont_update_row_element,"input_update_elemento_"+c,"","",columnas[j3])
                                        let in_up_elemento = input_update_elemento.querySelector("input");mathConcat(in_up_elemento);
                                        in_up_elemento.value = contenido_p_elementos[j3].innerHTML // valores internoes de inputs segun el inner de las p de la fila
                                    }
                                    // console.log(array_contenido_p_elementos)

                                    let footer_cont_update_row_element = mkObj(cont_update_row_element,"footer_cont_update_row_element_"+c)
                                        let btn_send_update = mkObjButton(footer_cont_update_row_element,"btn_send_update_"+c,"btn_send_update_"+i,"Actualizar Información.")
                                        btn_send_update.querySelector("button").addEventListener("click",()=>{

                                            let array_inputs_update_menu = cuerpo_header_cont_update_row_element.querySelectorAll("input")
                                            console.log(array_inputs_update_menu)

                                            let formData = new FormData()
                                            console.log(t)
                                            formData.append("nombre_operador",t)
                                            for (let j4 = 0; j4 < contenido_p_elementos.length; j4++) {
                                                // console.log(array_columnas[j4])
                                                // console.log(array_contenido_p_elementos[j4])
                                                formData.append(array_columnas[j4].replace(/[\s]/g,"_"),array_inputs_update_menu[j4].value)

                                            }
                                            let peticion = new XMLHttpRequest()
                                            peticion.open("POST",url_)
                                            peticion.send(formData)
                                            peticion.onreadystatechange=function () {
                                                if (peticion.readyState==4&&peticion.status==200) {
                                                    let res = peticion.response
                                                    console.log(res)
                                                    if (res=="succes") {
                                                        for (let j5 = 0; j5 < contenido_p_elementos.length; j5++) {
                                                            contenido_p_elementos[j5].innerHTML=array_inputs_update_menu[j5].value
                                                        }
                                                        cont_update_row_element.remove()
                                                        // obj_elemento_crp_cont
                                                        //////////////////////
                                                        // DINÁMICA DE INPUTS EN FORMULARIO PARA AGREGAR ELEMENTO
                                                        // (no necesario, la tabla no lleva cálculo, unicamente lleva una varible entera)
                                                        // (es mejor considerar el aviso para revisar que el dato esté ingresado)
                                                        // (tomando en cuenta lo conplejidad debido a que existen viajes sin casetas)

                                                        // let existencia = parseInt(array_inputs_update_menu[3].value)
                                                        // let carga = parseInt(array_inputs_update_menu[4].value)
                                                        // let consumo = parseInt(array_inputs_update_menu[5].value)
                                                        // let total = parseInt(array_inputs_update_menu[6].value)

                                                        // console.log(array_inputs_update_menu_existencia,array_inputs_update_menu_carga,array_inputs_update_menu_consumo,array_inputs_update_menu_total)
                                                        // console.log(array_inputs_update_menu)
                                                        // if (total==(existencia+carga)-consumo) {
                                                        //     obj_elemento_crp_cont.style.background="none"
                                                        //     // console.log("none")
                                                        // } else {
                                                        //     obj_elemento_crp_cont.style.background="rgb(231, 83, 83)"
                                                        //     // console.log("rojo")
                                                        // }
                                                    }
                                                }
                                            }
                                        })
                            })

                        }

                        divs = Array.from(divs)

                        divs.sort(function(a, b) {
                            var dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            var dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });

                        // Vaciar el contenedor
                        obj_crp_cont.innerHTML = ''

                        // Agregar las divs ordenadas de nuevo al contenedor
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    // let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    // array_in_column[0].setAttribute("type","date")
                                    // array_in_column[1].setAttribute("type","text")
                                    // array_in_column[2].setAttribute("type","text")
                                    // array_in_column[3].setAttribute("type","number")
                                    // array_in_column[4].setAttribute("type","number")
                                    // array_in_column[5].setAttribute("type","number")
                                    // array_in_column[6].setAttribute("type","number")
                                    // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    // createTable()
                                                    // setTimeout(calculateTabla,500)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            // let arr_all_elements_totales = []
            let arreglo_totales_suma_tag = []


            function calculateTablaTags() {


                    for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS
                        let obj_cell_fila_datos = mkText(obj_fila_datos,cell_fila_datos_c,"cell_fila_datos_"+t.toLowerCase().replace(/[\s]/g,"_")+"_"+columnas[j].toLowerCase()+"_"+j,"0")
                        let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)
                        // console.log(array_obj_node)

                        let arr_int = []

                        let sum_arr_int = 0

                        let expresion_regular_num = /^[0-9]+$/

                        for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA
                            if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {
                                    arr_int.push(parseInt(array_obj_node[j_].innerHTML))
                                    sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)
                                    obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                            } else {
                                obj_cell_fila_datos.firstChild.innerHTML=array_obj_node.length
                            }
                        }
                        if (sum_arr_int!="0") {
                            arreglo_totales_suma_tag.push(sum_arr_int)
                        }
                    }

                    if (arreglo_totales_suma_tag.length==0) {
                        arreglo_totales_suma_tag.push(0)
                    }

                    return arreglo_totales_suma_tag
            }

            let total = arreglo_totales_suma_tag
            setTimeout(calculateTablaTags,1250)

            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                    })
                }, 585);


            })
        
            return {obj_temp,total}

}

function mkPestañaTablaNomina(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n=""
    c?c:c=""
    i?i:i=""
    t?t:t=""
    f?f:f=""
    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()
    // // console.log(fecha_)

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j],columnas[j])
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("nombre_operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() { //PETICION FILA
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);

                        let btn_descargar_excel = mkObjButton(obj_h,"btn_descargar_excel","btn_descargar_excel","Descargar Excel")

                        btn_descargar_excel.addEventListener("click", function () {
                            console.log(datos);
                            // console.log(JSON.stringify(res_peticion_elemento));
                        
                            let formData_excel_nomina = new FormData();
                            formData_excel_nomina.append("datos", res_peticion_elemento);
                            formData_excel_nomina.append("operador", t.toUpperCase());
                        
                            let peticion_excel_nomina = new XMLHttpRequest();
                            peticion_excel_nomina.open("POST", "generar_tabla_nomina.php");
                            peticion_excel_nomina.responseType = "blob"; // Establece el tipo de respuesta como Blob
                            peticion_excel_nomina.send(formData_excel_nomina);
                        
                            peticion_excel_nomina.onreadystatechange = function () {
                                if (peticion_excel_nomina.readyState == 4 && peticion_excel_nomina.status == 200) {
                                    let blob = peticion_excel_nomina.response;
                                    console.log(blob)
                                    
                                    // Crea un objeto URL para el Blob
                                    let blobUrl = URL.createObjectURL(blob);
                        
                                    // Crea un enlace (link) para descargar el archivo
                                    let a = document.createElement("a");
                                    a.style.display = "none";
                                    a.href = blobUrl;
                                    a.download = `NOMINAS-${f}-${t}.xlsx`; // Nombre del archivo
                                    document.body.appendChild(a);
                        
                                    // Simula un clic en el enlace para iniciar la descarga
                                    a.click();
                        
                                    // Limpia el objeto URL y remueve el enlace
                                    URL.revokeObjectURL(blobUrl);
                                    document.body.removeChild(a);
                                }
                            };
                        });
                        
                        let divs = []

                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)

                            divs.push(obj_elemento_crp_cont)

                            let fila_info = []

                            let array_columnas_panel = [
                                "TARIMAS",
                                "COSTO VIAJE",
                                "VALE",
                                "CONCEPTO",
                                "IMPORTE",
                                "OTROS",
                                "TOTAL NOMINA",
                                "OBSERVACIONES"

                            ]

                            for (let j_ = 0; j_ < columnas.length; j_++) {
                            // console.log(columnas[j_])

                                let valor_celda = datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")]
                                if (valor_celda===0) {valor_celda="0"}

                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,valor_celda) // correccion: hay que asegurarse de que los valores esten bien represntados para evitar problemas al momento de llamar al contenido de la celda

                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                                
                                // if (array_columnas_panel.includes(columnas[j_])) {
                                //     p_obj_col_elementos_crp_cont.innerHTML = "0"
                                // }

                            }

                            let check_tarimas = parseInt(fila_info[3])
                            let check_costo_viaje = parseInt(fila_info[4])
                            let check_vale = parseInt(fila_info[5])
                            let check_concepto = parseInt(fila_info[6])
                            let check_importe = parseInt(fila_info[7])
                            let check_otros = parseInt(fila_info[8])
                            let check_total_nomina = parseInt(fila_info[9])
                            let check_observaciones = parseInt(fila_info[10])
                            


                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                            let array_contenido_p_elementos = []
                            let array_columnas = []

                            for (let j2 = 0; j2 < contenido_p_elementos.length; j2++) {
                                array_contenido_p_elementos.push(contenido_p_elementos[j2].innerHTML)
                                array_columnas.push(contenido_p_elementos[j2].getAttribute("cell_class"))
                            }

                            /////////////////////////
                            /// AGREGAR UN ELEMENTO

                            // // console.log(array_contenido_p_elementos)
                            
                            obj_elemento_crp_cont.addEventListener("mouseup",function () { // update_element
                                // // console.log(array_contenido_p_elementos)
                                let cont_update_row_element = mkObj(obj_crp_cont,"cont_update_row_element_"+c,"cont_update_row_element_"+i)
                                    let header_cont_update_row_element = mkObj(cont_update_row_element,"header_cont_update_row_element_"+c,"header_cont_update_row_element_"+i)
                                        let tittle_update_element = mkText(header_cont_update_row_element,"tittle_update_element","tittle_update_element","Actualizar Elemento.")
                                        let btn_cerrar_ventana_update = mkObj(header_cont_update_row_element,"btn_cerrar_ventana_update","btn_cerrar_ventana_update_"+i,"~")
                                        btn_cerrar_ventana_update.addEventListener("mouseup",()=>{
                                            cont_update_row_element.remove()
                                        })
                                    
                                    let cuerpo_header_cont_update_row_element = mkObj(cont_update_row_element,"cuerpo_header_cont_update_row_element_"+c,"cuerpo_header_cont_update_row_element"+i)

                                    for (let j3 = 0; j3 < array_contenido_p_elementos.length; j3++) {
                                        let input_update_elemento = mkObjInput(cuerpo_header_cont_update_row_element,"input_update_elemento_"+c,"","",columnas[j3])
                                        let in_up_elemento = input_update_elemento.querySelector("input")
                                        in_up_elemento.value = contenido_p_elementos[j3].innerHTML // valores internoes de inputs segun el inner de las p de la fila
                                    }
                                    // // console.log(array_contenido_p_elementos)

                                    let footer_cont_update_row_element = mkObj(cont_update_row_element,"footer_cont_update_row_element_"+c)
                                        let btn_send_update = mkObjButton(footer_cont_update_row_element,"btn_send_update_"+c,"btn_send_update_"+i,"Actualizar Información.")

                                        btn_send_update.querySelector("button").addEventListener("click",()=>{
                                            let array_inputs_update_menu = cuerpo_header_cont_update_row_element.querySelectorAll("input")
                                            // // console.log(array_inputs_update_menu)

                                            let formData = new FormData()
                                            // // console.log(t)
                                            formData.append("nombre_operador",t)
                                            for (let j4 = 0; j4 < contenido_p_elementos.length; j4++) {
                                                // // console.log(array_columnas[j4])
                                                // // console.log(array_contenido_p_elementos[j4])
                                                formData.append(array_columnas[j4].replace(/[\s]/g,"_"),array_inputs_update_menu[j4].value)
                                                // // console.log(array_columnas[j4].replace(/[\s]/g,"_"))
                                                
                                            }
                                            let peticion = new XMLHttpRequest()
                                            peticion.open("POST",url_)
                                            peticion.send(formData)
                                            peticion.onreadystatechange=function () {
                                                if (peticion.readyState==4&&peticion.status==200) {
                                                    let res = peticion.response
                                                    // console.log(res)
                                                    if (res=="succes") {
                                                        for (let j5 = 0; j5 < contenido_p_elementos.length; j5++) {
                                                            contenido_p_elementos[j5].innerHTML=array_inputs_update_menu[j5].value
                                                        }    
                                                        cont_update_row_element.remove()
                                                        let btn_exc = document.getElementById("cont_btn_descargar_excel")
                                                        if (btn_exc) {
                                                            btn_exc.remove()
                                                        }
                                                    }
                                                }
                                            }
                                        })
                            })

                        }

                        divs = Array.from(divs)

                        divs.sort(function(a, b) {
                            var dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            var dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });

                        // Vaciar el contenedor
                        obj_crp_cont.innerHTML = ''

                        // Agregar las divs ordenadas de nuevo al contenedor
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                // // console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    // createTable()
                                                    // setTimeout(calculateTabla,500)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTablaNomina() {



                    for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS

                        let arr_int = [] // arreglo para valores enteros
                        let sum_arr_int = 0 // sumatoria de valores
                        let expresion_regular_num = /^[0-9]+$/


                        let obj_cell_fila_datos = mkText(    obj_fila_datos, cell_fila_datos_c,  "cell_fila_datos_"+t.toLowerCase().replace(/[\s]/g,"_")+"_"+           columnas[j].toLowerCase()+"_"+j   ,"0")
                        let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)




                        for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA
                            if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                                // if (array_obj_node[j_].getAttribute("cell_class")=="km_total") { // adaptaciones para reportes de km_total
                                //     obj_cell_fila_datos.firstChild.innerHTML=array_obj_node[j_].innerHTML

                                // } else if (array_obj_node[j_].getAttribute("cell_class")=="tarimas") { // adaptaciones para reportes de km_total
                                //     obj_cell_fila_datos.firstChild.innerHTML=array_obj_node[0].innerHTML
                                // } else { // adaptaciones para reportes de km_total
                                    arr_int.push(parseInt(array_obj_node[j_].innerHTML))

                                    let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)

                                    obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                                // }
                                
                            } else {
                                obj_cell_fila_datos.firstChild.innerHTML = array_obj_node.length
                            }
                        }
                        arr_all_elements_totales.push(obj_cell_fila_datos.firstChild.innerHTML)
                    }

                    // let check_fecha = arr_all_elements_totales[0]
                    // let check_origen = arr_all_elements_totales[1]
                    // let check_destino = arr_all_elements_totales[2]
                    // let check_tarimas = arr_all_elements_totales[3]
                    // let check_km_recorrido = arr_all_elements_totales[4]
                    // let check_km_total = arr_all_elements_totales[5]
                    // let check_nomina = arr_all_elements_totales[6]
                    // let check_mecanico = arr_all_elements_totales[7]
                    // let check_costo_nomina = arr_all_elements_totales[8]
                    // let check_descripcion = arr_all_elements_totales[9]

                    // if (check_km_total!=(parseInt(check_tarimas)+parseInt(check_km_recorrido))) {
                    //     console.log(`%cError en la información de totales: ${t}`,"color:#f7983e;")
                    // }

            }
            setTimeout(calculateTablaNomina,1250)
            // l(arr_all_elements_totales)
            let total = arr_all_elements_totales

            return {obj_temp,total}
}

function mkPestañaTablaCobranzaSemana(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";

    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            // console.log(fecha_)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j].toLowerCase().replace(/[\s]/g,"_"),columnas[j])
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                // formData_.append("nombre_operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            // console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);
                        // console.log(datos)

                        let divs = []
                        let divs_fecha_venta = []
                        let colores = ["##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd"]



                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []


    
    

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")])

                                let temp_ = (columnas[j_].toLowerCase()).replace(/[\s]/g,"_")
                                // console.log(datos[j])
                                // console.log([columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(obj_col_elementos_crp_cont)
                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))
                                p_obj_col_elementos_crp_cont.setAttribute("fecha",datos[j]["fecha"])
                                p_obj_col_elementos_crp_cont.setAttribute("date",new Date(datos[j]["fecha"]).toISOString())
                                p_obj_col_elementos_crp_cont.setAttribute("nombre_operador",datos[j]["nombre_operador"])
                                p_obj_col_elementos_crp_cont.setAttribute("columna",(columnas[j_].toLowerCase()).replace(/[\s]/g,"_"))

                                if (j_===0) {
                                    p_obj_col_elementos_crp_cont.style.background=colores[parseInt(p_obj_col_elementos_crp_cont.innerHTML.split("-").pop())]
                                }

                                // datos[j]

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)

                                p_obj_col_elementos_crp_cont.addEventListener("mouseup",function () {

                                    

                                    let nombre_operador = p_obj_col_elementos_crp_cont.getAttribute("nombre_operador")
                                    let date = p_obj_col_elementos_crp_cont.getAttribute("date")
                                    let fecha = p_obj_col_elementos_crp_cont.getAttribute("fecha")
                                    let columna = p_obj_col_elementos_crp_cont.getAttribute("columna")
                                    // console.log(p_obj_col_elementos_crp_cont)
                                    if (document.getElementById("hipercapa_cobranza")) {
                                        document.getElementById("hipercapa_cobranza").remove()
                                    }
                                    let hipercapa_cobranza = mkObj(obj_crp,"hipercapa","hipercapa_cobranza");stylerPosition(obj_crp,"relative");stylerPosition(hipercapa_cobranza,"absolute");stylerzIndex(hipercapa_cobranza,"3");
                                        hipercapa_cobranza.scrollIntoView({behavior:"smooth"})

                                        let ventana_actualizar_dato_cobranza = mkObj(hipercapa_cobranza,"ventana_actualizar_dato_cobranza","ventana_actualizar_dato_cobranza")
                                            let header_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"header_ventana_actualizar_dato_cobranza","header_ventana_actualizar_dato_cobranza")
                                                let tittle_header_ventana_actualizar_dato_cobranza = mkText(header_ventana_actualizar_dato_cobranza,"tittle_header_ventana_actualizar_dato_cobranza","tittle_header_ventana_actualizar_dato_cobranza","Actualizar información: "+columna+" - "+nombre_operador+" - "+fecha)
                                                let btn_cerrar_header_ventana_actualizar_dato_cobranza = mkObj(header_ventana_actualizar_dato_cobranza,"btn_cerrar_header_ventana_actualizar_dato_cobranza","btn_cerrar_header_ventana_actualizar_dato_cobranza","X")

                                                btn_cerrar_header_ventana_actualizar_dato_cobranza.addEventListener("mouseup",function () {
                                                    hipercapa_cobranza.remove()
                                                })

                                            let cuerpo_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"cuerpo_ventana_actualizar_dato_cobranza","cuerpo_ventana_actualizar_dato_cobranza")
                                                // let obj_input_actualizar_dato_cobranza = mkObjTextarea(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                                // let in_dato = obj_input_actualizar_dato_cobranza.querySelector("textarea")
                                                // in_dato.focus()
                                                // in_dato.value = p_obj_col_elementos_crp_cont.innerHTML

                                                let in_dato

                                            ///    console.log(p_obj_col_elementos_crp_cont.getAttribute("cell_class"))
                                                if (p_obj_col_elementos_crp_cont.getAttribute("cell_class")==="fecha_venta") {
                                                    let obj_input_actualizar_dato_cobranza = mkObjInput(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","date","Actualizar información","Ingresa la Información...")
                                                        in_dato = obj_input_actualizar_dato_cobranza.querySelector("input")
                                                        in_dato.focus()
                                                        in_dato.value = p_obj_col_elementos_crp_cont.innerHTML
                                                } else {
                                                    let obj_input_actualizar_dato_cobranza = mkObjInput(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_textarea_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                                        in_dato = obj_input_actualizar_dato_cobranza.querySelector("input")
                                                        in_dato.focus()
                                                        in_dato.value = p_obj_col_elementos_crp_cont.innerHTML    
                                                        if (p_obj_col_elementos_crp_cont.getAttribute("cell_class")==="unidad") {

                                                            let datalist_operadores = mkObjDatalist(obj_input_actualizar_dato_cobranza,"operadores","operadores",
                                                                "DINA",
                                                                "WHITE",
                                                                "PROSTAR",
                                                                "INTER 9400",
                                                                "KENWORTH T800 BLANCO",
                                                                "KENWORTH T800 GRIS",
                                                                "KENWORTH 1994",
                                                                "KENWORTH 1996",
                                                                "KENWORTH 1982",
                                                                "EXTERNO"
                                                            )       
                                                            console.log(obj_input_actualizar_dato_cobranza)                           
                                                        }
                                                }
                                                

                                            let footer_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"footer_ventana_actualizar_dato_cobranza","footer_ventana_actualizar_dato_cobranza")
                                                let btn_actualizar_footer_ventana_actualizar_dato_cobranza = mkObjButton(footer_ventana_actualizar_dato_cobranza,"btn_actualizar_footer_ventana_actualizar_dato_cobranza","btn_actualizar_footer_ventana_actualizar_dato_cobranza","Actualizar")

                                                btn_actualizar_footer_ventana_actualizar_dato_cobranza.addEventListener("click",function () {
                                                    let formData = new FormData()
                                                    formData.append("date",date)
                                                    formData.append("nombre_operador",nombre_operador)
                                                    formData.append("columna",columna)
                                                    formData.append("dato",in_dato.value)

                                                    let peticion = new XMLHttpRequest()
                                                    peticion.open("POST",url_)
                                                    peticion.send(formData)
                                                    peticion.onreadystatechange=function () {
                                                        if (peticion.readyState==4&&peticion.status==200) {

                                                            console.log(`date -> ${date}`)
                                                            console.log(`nombre_operador -> ${nombre_operador}`)
                                                            console.log(`columna -> ${columna}`)
                                                            console.log(`dato -> ${in_dato.value}`)
                                                            console.log(peticion.response)
                                                            if (peticion.response==="success") {
                                                                hipercapa_cobranza.remove()
                                                                p_obj_col_elementos_crp_cont.innerHTML = in_dato.value
                                                            }
                                                        }
                                                    }
                                                })

                                            setTimeout(() => {
                                                document.addEventListener("mouseup",function (x) {
                                                    if (ventana_actualizar_dato_cobranza&&!ventana_actualizar_dato_cobranza.contains(x.target)) {
                                                         hipercapa_cobranza.remove()
                                                     }
                                                 }) 
                                            }, 500);
                                            
                                                
                                })
                            }
                            obj_elemento_crp_cont.setAttribute("info_data",fila_info[0]+" "+fila_info[1]+" "+fila_info[13])
                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                        }


                        //ordenar cobranza por fecha normal



                        divs = Array.from(divs)
                        divs.sort(function(a, b) {
                            let dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            let dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)

                            return dateA - dateB

    
                        });
                        obj_crp_cont.innerHTML = ''
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                        // nota ordenar cobranza por fecha de venta

                        let isBackgroundBlue = false;

                        console.log(obj_crp_cont)
                        console.log(obj_crp_cont[0])
                        console.log(obj_crp_cont.length)

                        let filas_temp = obj_crp_cont.querySelectorAll("."+crp_cont_c)
                        console.log(filas_temp)
                        for (let j = 0; j < filas_temp.length; j++) {
                            console.log(filas_temp)
                            console.log(filas_temp[j])
                            if (isBackgroundBlue) {
                                filas_temp[j].style.backgroundColor = 'blue';
                            } else {
                                filas_temp[j].style.backgroundColor = 'transparent';
                            }
    
                            isBackgroundBlue = !isBackgroundBlue;
                        }


                        let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                            divs.sort(function(a, b) {
                                let dateA = new Date(a.querySelector('[cell_class=fecha_venta]').textContent)
                                console.log(dateA)
                                let dateB = new Date(b.querySelector('[cell_class=fecha_venta]').textContent)
                                console.log(dateB)
                                return dateA - dateB
                            });
                            obj_crp_cont.innerHTML = ''
                            divs.forEach(function(div) {
                                obj_crp_cont.appendChild(div)
                            });
                        })
                        

                        // ORDENAR POR OPERADOR
                        let btn_ordenar_nombre_operador = document.getElementById("p_columna_header_tablaCobranza_viajes_semana_nombre_operador")
                        btn_ordenar_nombre_operador.addEventListener("mouseup", function () {
                            divs.sort(function (a, b) {
                                let nombreA = a.querySelector('[cell_class=nombre_operador]').textContent;
                                let nombreB = b.querySelector('[cell_class=nombre_operador]').textContent;
                                return nombreA.localeCompare(nombreB);
                            });
                            obj_crp_cont.innerHTML = '';
                            divs.forEach(function (div) {
                                obj_crp_cont.appendChild(div);
                            });
                        });

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    array_in_column[0].setAttribute("type","date")
                                    array_in_column[1].setAttribute("type","text")
                                    array_in_column[2].setAttribute("type","text")
                                    array_in_column[3].setAttribute("type","number")
                                    array_in_column[4].setAttribute("type","number")
                                    array_in_column[5].setAttribute("type","number")
                                    array_in_column[6].setAttribute("type","number")
                                    // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    createTable()
                                                    setTimeout(calculateTabla,500)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTabla() {
                    for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS
                        let obj_cell_fila_datos = mkText(obj_fila_datos,cell_fila_datos_c,"cell_fila_datos_"+t.toLowerCase().replace(/[-\s]/g,"_")+"_"+columnas[j].toLowerCase()+"_"+j,"0")
                        let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)

                        let arr_int = []

                        let expresion_regular_num = /^[\-0-9]+$/

                        for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA

                            let temp_columna = array_obj_node[j_].getAttribute("cell_class")
                            let contenido_celda = array_obj_node[j_].innerHTML
                            // console.log(array_obj_node)
                            console.log(temp_columna)
                            //if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                                if (

                                    temp_columna==="km_recorrido"||
                                    temp_columna==="tarimas"||
                                    temp_columna==="costo_flete_total"||
                                    temp_columna==="costo_flete_interno"||
                                    temp_columna==="costo_flete_externo"||
                                    temp_columna==="pago_operador"||
                                    temp_columna==="consumo_tag"||
                                    temp_columna==="gastos_federal"||
                                    temp_columna==="gastos_material"||
                                    temp_columna==="gastos_monta_enlonada"||
                                    temp_columna==="gastos_otros"||
                                    temp_columna==="gastos_variables_tracto"||
                                    temp_columna==="gastos_variables_remolque"||
                                    temp_columna==="gastos_otros"||
                                    temp_columna==="gastos_variables_tracto"||
                                    temp_columna==="gastos_variables_remolque"||
                                    temp_columna==="recuperacion_tracto"||
                                    temp_columna==="recuperacion_remolque"||
                                    temp_columna==="costo_diesel"||
                                    temp_columna==="utilidad_viaje"||
                                    temp_columna==="utilidad_extra"
                                    
                                    ) 
                                {
                                    let int_temp = contenido_celda===""?0:contenido_celda
                                    console.log(int_temp)
                                    arr_int.push(parseInt(int_temp))
                                    let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)
                                    obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                                }

                             else {
                                obj_cell_fila_datos.firstChild.innerHTML=array_obj_node.length
                            }
                        }
                        arr_all_elements_totales.push(parseInt(obj_cell_fila_datos.firstChild.innerHTML))
                    }

                    let check_fecha = arr_all_elements_totales[0]
                    let check_origen = arr_all_elements_totales[1]
                    let check_destino = arr_all_elements_totales[2]
                    let check_existencia = arr_all_elements_totales[3]
                    let check_carga = arr_all_elements_totales[4]
                    let check_consumo = arr_all_elements_totales[5]
                    let check_total = arr_all_elements_totales[6]

                    if (check_total!=(check_existencia+check_carga-check_consumo)) {
                        console.log(`%cError en la información de totales: ${t}`,"color:#f7983e;")
                    }


                }
            setTimeout(calculateTabla,1250)
                // actualizado [si] -
                obj_btn_img_converter.addEventListener("mouseup",function() {
                    obj_temp.scrollIntoView({behavior:"smooth"})
                    // n.scrollBy(0, -55);
                    setTimeout(() => {
                        html2canvas(obj_temp).then(function (canvas) {
                            let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                                body.style.position="relative"
                                cont_img_table.style.position="absolute"
                                cont_img_table.scrollIntoView()

                                let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                    let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                        let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                        btn_cerrar_img_table.addEventListener("mouseup",function () {
                                            cont_img_table.remove()
                                        })

                                    let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                        let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                        })
                    }, 585);


            })





            let t_return = obj_t
            return {obj_temp,arr_all_elements_totales,t_return}
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mkGraficDieseles(n,c,i,s,v,cl) { // nodo, clase, id, suma totales, totales / panel, columnas
    n?n:""
    c?c:""
    i?i:""
    s?s:""
    v?v:""
    cl?cl:""

    let obj_temp = mkObj(n,"grafic_"+c,"grafic_"+i)

    let existencias = []
    let cargas = []
    let consumos = []
    let totales = []

    let suma_existencias = s[3]
    let suma_cargas = s[4]
    let suma_consumos = s[5]
    let suma_totales = s[6]

    let porcentajes_existencias = []
    let porcentajes_cargas = []
    let porcentajes_consumos = []
    let porcentajes_totales = []


    let unidades = []

    let porcentajes = []

    let colores = ["#FF5733","#00A8E8","#FFC300","#8A2BE2","#FF6363","#4CAF50","#9B59B6","#3498DB","#F39C12"]

                        // // // // // // // #FF5733 (Naranja)
                        // // // // // // // #00A8E8 (Azul claro)
                        // // // // // // // #FFC300 (Amarillo)
                        // // // // // // // #8A2BE2 (Azul violeta)
                        // // // // // // // #FF6363 (Rosa claro)
                        // // // // // // // #4CAF50 (Verde)
                        // // // // // // // #9B59B6 (Violeta)
                        // // // // // // // #3498DB (Azul)
                        // // // // // // // #F39C12 (Naranja claro)

    for (let j = 0; j < v.length; j++) {
        for (let j2 = 0; j2 < cl.length; j2++) {

            let cantidad_elemento = parseInt(v[j].arr_all_elements_totales[j2+3])

            if (cl[j2]=="Existencia") {
                existencias.push(cantidad_elemento)
                porcentajes_existencias.push((cantidad_elemento/suma_existencias)*100)
            } else if (cl[j2]=="Carga") {
                // console.log("Carga :: --> "+": "+cl[j2]+" = "+v[j].arr_all_elements_totales[j2+3]+"  -  "+"Unidad: "+v[j].obj_temp.getAttribute("id_panel"))
                cargas.push(cantidad_elemento)
                porcentajes_cargas.push((cantidad_elemento/suma_cargas)*100)
            } else if (cl[j2]=="Consumo") {
                consumos.push(cantidad_elemento)
                porcentajes_consumos.push((cantidad_elemento/suma_consumos)*100)
            } else if (cl[j2]=="Total") {
                totales.push(cantidad_elemento)
                // console.log((cantidad_elemento/porcentajes_totales)*100)
                porcentajes_totales.push((cantidad_elemento/suma_totales)*100)
            }
            // console.log("Existencia :: --> "+"Columna: "+cl[j2]+" = "+v[j].arr_all_elements_totales[j2+3]+"  -  "+"Unidad: "+v[j].obj_temp.getAttribute("id_panel"))
        }
        unidades.push(v[j].obj_temp.getAttribute("id_panel"))
    }
    // console.log(cl)
    //     console.log("existencias: "+existencias)
    //     console.log("cargas: "+cargas)
    //     console.log("consumos: "+consumos)
    //     console.log("totales: "+totales)

    //     console.log("suma existencias: "+suma_existencias)
    //     console.log("suma cargas: "+suma_cargas)
    //     console.log("suma consumos: "+suma_consumos)
    //     console.log("suma totales: "+suma_totales)

    //     console.log("existencias: "+porcentajes_existencias)
    //     console.log("cargas: "+porcentajes_cargas)
    //     console.log("consumos: "+porcentajes_consumos)
    //     console.log("totales: "+porcentajes_totales)

    // console.log(unidades)

    let parametros_existencias
    let parametros_cargas
    let parametros_consumos
    let parametros_totales

    let j_sumatoria_existencias = 0
    let j_sumatoria_cargas = 0
    let j_sumatoria_consumos = 0
    let j_sumatoria_totales = 0

    let sumatoria_anterior_existencias = 0
    let sumatoria_anterior_cargas = 0
    let sumatoria_anterior_consumos = 0
    let sumatoria_anterior_totales = 0

    for (let j = 0; j < unidades.length; j++) {

        j_sumatoria_existencias += parseFloat(porcentajes_existencias[j])
        sumatoria_anterior_existencias = parseFloat(j_sumatoria_existencias)-parseFloat(porcentajes_existencias[j])

        j_sumatoria_cargas += parseFloat(porcentajes_cargas[j])
        sumatoria_anterior_cargas = parseFloat(j_sumatoria_cargas)-parseFloat(porcentajes_cargas[j])

        j_sumatoria_consumos += parseFloat(porcentajes_consumos[j])
        sumatoria_anterior_consumos = parseFloat(j_sumatoria_consumos)-parseFloat(porcentajes_consumos[j])

        j_sumatoria_totales += parseFloat(porcentajes_totales[j])
        sumatoria_anterior_totales = parseFloat(j_sumatoria_totales)-parseFloat(porcentajes_totales[j])

        if (j==0) {
            parametros_existencias = colores[j]+" 0%,"
            parametros_existencias = parametros_existencias + colores[j] + " " + j_sumatoria_existencias + "%, "

            parametros_cargas = colores[j]+" 0%,"
            parametros_cargas = parametros_cargas + colores[j] + " " + j_sumatoria_cargas + "%, "

            parametros_consumos = colores[j]+" 0%,"
            parametros_consumos = parametros_consumos + colores[j] + " " + j_sumatoria_consumos + "%, "

            parametros_totales = colores[j]+" 0%,"
            parametros_totales = parametros_totales + colores[j] + " " + j_sumatoria_totales + "%, "

        } else if (j==unidades.length-1) {
            parametros_existencias = parametros_existencias + colores[j] + " " + sumatoria_anterior_existencias + "%,"
            parametros_existencias = parametros_existencias + colores[j] + " " + "100%"

            parametros_cargas = parametros_cargas + colores[j] + " " + sumatoria_anterior_cargas + "%,"
            parametros_cargas = parametros_cargas + colores[j] + " " + "100%"

            parametros_consumos = parametros_consumos + colores[j] + " " + sumatoria_anterior_consumos + "%,"
            parametros_consumos = parametros_consumos + colores[j] + " " + "100%"

            parametros_totales = parametros_totales + colores[j] + " " + sumatoria_anterior_totales + "%,"
            parametros_totales = parametros_totales + colores[j] + " " + "100%"

        } else {
            parametros_existencias = parametros_existencias + colores[j] + " " + sumatoria_anterior_existencias + "%, "
            parametros_existencias = parametros_existencias + colores[j] + " " + j_sumatoria_existencias + "%, "

            parametros_cargas = parametros_cargas + colores[j] + " " + sumatoria_anterior_cargas + "%, "
            parametros_cargas = parametros_cargas + colores[j] + " " + j_sumatoria_cargas + "%, "

            parametros_consumos = parametros_consumos + colores[j] + " " + sumatoria_anterior_consumos + "%, "
            parametros_consumos = parametros_consumos + colores[j] + " " + j_sumatoria_consumos + "%, "

            parametros_totales = parametros_totales + colores[j] + " " + sumatoria_anterior_totales + "%, "
            parametros_totales = parametros_totales + colores[j] + " " + j_sumatoria_totales + "%, "

        }
        // console.log(sumatoria_anterior_existencias)
        // console.log(j_sumatoria_existencias)
    }
    // console.log(parametros_existencias)

    let background_style_existencias = `conic-gradient(${parametros_existencias})`
    let background_style_cargas = `conic-gradient(${parametros_cargas})`
    let background_style_consumos = `conic-gradient(${parametros_consumos})`
    let background_style_totales = `conic-gradient(${parametros_totales})`
    // console.log(background_style)
    let cont_grafica_unidades = mkObj(obj_temp,"cont_grafica_unidades")
        for (let j = 0; j < unidades.length; j++) {

            let inner_contenido_filas_unidades = unidades[j].replace(/[_]/," ").toUpperCase()+"<br>"+"Existencia: "+porcentajes_existencias[j].toFixed(2)+"% - "+existencias[j]+" lt"+"<br>"+"Carga: "+porcentajes_cargas[j].toFixed(2)+"% - "+cargas[j]+" lt"+"<br>"+"Consumo: "+porcentajes_consumos[j].toFixed(2)+"% - "+consumos[j]+" lt"+"<br>"+"Total: "+porcentajes_totales[j].toFixed(2)+"% - "+totales[j]+" lt"

            let fila_unidades = mkObj(cont_grafica_unidades,"fila_unidades")

                let cont_color_unidades = mkObj(fila_unidades,"cont_color_unidades")
                    let color_unidades = mkObj(cont_color_unidades,"color_unidades")
                    color_unidades.style.background=colores[j]
                    // console.log(colores[j])

                let cont_name_unidades = mkObj(fila_unidades,"cont_name_unidades")
                    let name_unidades = mkObj(cont_name_unidades,"name_unidades","name_unidades_"+unidades[j],inner_contenido_filas_unidades)


        }

    let cont_grafica_contenido = mkObj(obj_temp,"cont_grafica_contenido")

        let grafica_existencias = mkObj(cont_grafica_contenido,"grafica_valores_totales","")
        grafica_existencias.style.background = background_style_existencias
            let circle_existencias = mkObj(grafica_existencias,"grafic_circle","","Existencias")

        let grafica_cargas = mkObj(cont_grafica_contenido,"grafica_valores_totales","")
        grafica_cargas.style.background = background_style_cargas
            let circle_cargas = mkObj(grafica_cargas,"grafic_circle","","Cargas")

        let grafica_consumos = mkObj(cont_grafica_contenido,"grafica_valores_totales","")
        grafica_consumos.style.background = background_style_consumos
            let circle_consumos = mkObj(grafica_consumos,"grafic_circle","","Consumos")

        let grafica_totales = mkObj(cont_grafica_contenido,"grafica_valores_totales","")
        grafica_totales.style.background = background_style_totales
            let circle_totales = mkObj(grafica_totales,"grafic_circle","","Totales")

    return obj_temp
}

function mkBtnFlexElement(btn,element) {
    btn.addEventListener("mouseup",function() {
        element.style.display="flex"
    })
}

function placerMenu(btn,menu) {
    let timer;
    btn.addEventListener("mouseenter", function(x) {
        menu.style.display = "flex"; // Mostrar el elemento "menu" con estilo flex
        clearTimeout(timer); // Limpiar el temporizador existente
        // Añadir un evento "mouseup" al documento
        document.addEventListener("mouseup", function(n) {
            if (!menu.contains(n.target)) {
                menu.style.display = "none"; // Ocultar "menu" si el clic no está dentro de él
            }
        });
    });

    // Añadir un evento "click" al elemento "btn"
    btn.addEventListener("click", function(x) {
        menu.style.display = "flex"; // Mostrar el elemento "menu" con estilo flex
        clearTimeout(timer); // Limpiar el temporizador existente
        // Añadir un evento "mouseup" al documento
        document.addEventListener("mouseup", function(n) {
            if (!menu.contains(n.target)) {
                menu.style.display = "none"; // Ocultar "menu" si el clic no está dentro de él
            }
        });
    });

    // Añadir un evento "mouseleave" al elemento "btn"
    btn.addEventListener("mouseleave", function(x) {
        // Establecer un temporizador para ocultar "menu" después de 1100 ms (1.1 segundos)
        timer = setTimeout(function() {
            menu.style.display = "none"; // Ocultar el elemento "menu"
        }, 1100);
    });
}

function l(x) {
    console.log(x)
}

function peticionLogin(node,url,callback) { // nodo contenedor de inputs de formulario, direccion del archivo PHP,elementos para la peticion
    let array_input_temp = node.querySelectorAll("input")
    let formData = new FormData()
    let elemento
    console.log(array_input_temp)

    let credenciales = ["usuario","contraseña"]


    //???????????????????????????????????????
    //???????????????????????????????????????
    for (let j = 0; j < array_input_temp.length; j++) {
        // elemento = (((((array_input_temp[j].parentNode).parentNode).parentNode).firstChild).firstChild).firstChild.innerHTML.replace(/[:]/g,"").toLowerCase() // para utilizar estas linea es necesario que la estructura del los inputs sea igual a las que presenta esta biblioteca
        // console.log(credenciales[j])
        formData.append(credenciales[j],array_input_temp[j].value)
    }

    let peticion = new XMLHttpRequest()
    peticion.open("POST",url)
    peticion.send(formData)
    peticion.onreadystatechange=function() {
        if (peticion.readyState==4&&peticion.status==200) {
            let res = peticion.response
            console.log(res)
            callback(res)
        }
    }
}

function mkAviso(node,c,i,text) {
    node?true:""
    c?true:""
    i?true:""
    text?true:""
    let obj_temp = mkText(node,c,i,text)
    obj_temp.style.color="red"

    return obj_temp
}

// Esta función se ejecuta cuando ocurre un evento en un formulario.
function checkForm(event) {
    // Se obtiene el elemento que disparó el evento.
    let obj_temp = event.target;

    // Se obtiene el elemento padre del objeto que disparó el evento.
    let parentNode_temp = obj_temp.parentNode;

    // Se seleccionan todos los elementos <input> que son hijos del mismo padre.
    let inputs = parentNode_temp.querySelectorAll("input");

    // Se recorre la lista de elementos <input>.
    for (let i = 0; i < inputs.length; i++) {
        // Si el valor del elemento <input> actual está vacío.
        if (inputs[i].value=="") {
            // Se crea un nuevo elemento <p> para mostrar un mensaje de aviso.
            let mk_aviso = document.createElement("p");
            // Se establecen atributos al elemento <p>.
            mk_aviso.setAttribute("class","aviso_formularios");
            mk_aviso.setAttribute("id",inputs[i].getAttribute("id")+"_"+"aviso_formularios");
            // Se establece el texto del mensaje de aviso.
            mk_aviso.innerHTML="Este campo es obigatorio";

            // Si ya existe un elemento con el mismo id para el mensaje de aviso.
            if (document.getElementById(inputs[i].getAttribute("id")+"_"+"aviso_formularios")) {
                // Se elimina el elemento de aviso existente.
                document.getElementById(inputs[i].getAttribute("id")+"_"+"aviso_formularios").remove();
            }

            // Se obtiene el elemento padre del input actual.
            let parentNoden_inputs = inputs[i].parentNode;
            // Se agrega el elemento de aviso al padre del input.
            parentNoden_inputs.appendChild(mk_aviso);

            // Se modifican los estilos del input para resaltar el error.
            inputs[i].style.border="none";
            inputs[i].style.borderBottom="solid 2px red";
        }
    }
}

function verificarPeticion(res) {
    let expresion_regular_verificar_peticion = /^err/

    let exr_err_php = /[error]/g

    if (!expresion_regular_verificar_peticion.test(res)){
        return true
    } else {
        return false
    }
}

function checkUser(url,callback) {
    let peticion = new XMLHttpRequest()
    peticion.open("GET",url)
    peticion.send()
    peticion.onreadystatechange=function() {
        if (peticion.readyState==4&&peticion.status==200) {
            let res = peticion.response
            callback(res)
        }
    }

    // <?php
        // session_start();
            // if (isset($_SESSION["usuario"])) {
            //     echo $_SESSION["usuario"];
            // } else {
            //     echo "err: Sin usuario";
            // }
    // ?>

}
 // ACTUALIZADO [NO] : ACTUALIZANDO EL 21/09/2023 10:11 AM
function mkGraficTags(n,c,i,s,v,cl) { // nodo, clase, id, suma totales, totales / panel, columnas
    n?n:""
    c?c:""
    i?i:""
    s?s:""
    v?v:""
    cl?cl:""

    let obj_temp = mkObj(n,"grafic_"+c,"grafic_"+i)
    let consumo_tag = []
    // let suma_consumo_tag = []
    let porcentajes_consumo_tag = []
    let categorias = []
    let porcentajes = []
    let colores = ["#FF5733","#00A8E8","#FFC300","#8A2BE2","#FF6363","#4CAF50","#9B59B6","#3498DB","#F39C12"]

                        // // // // // // // #FF5733 (Naranja)
                        // // // // // // // #00A8E8 (Azul claro)
                        // // // // // // // #FFC300 (Amarillo)
                        // // // // // // // #8A2BE2 (Azul violeta)
                        // // // // // // // #FF6363 (Rosa claro)
                        // // // // // // // #4CAF50 (Verde)
                        // // // // // // // #9B59B6 (Violeta)
                        // // // // // // // #3498DB (Azul)
                        // // // // // // // #F39C12 (Naranja claro)

//     console.log(s)
    // console.log(v)

    let suma_total = 0

    for (let j = 0; j < v.length; j++) {
        suma_total=suma_total+parseInt(s[j])
        // console.log(s)
        // console.log(suma_total)
    }


    for (let j = 0; j < v.length; j++) {

        let cantidad_elemento = parseInt(v[j].total[0])

        consumo_tag.push(cantidad_elemento)
        porcentajes_consumo_tag.push((cantidad_elemento/suma_total)*100)
        categorias.push(v[j].obj_temp.getAttribute("id_panel"))
        // console.log(cantidad_elemento)
    }
    // console.log(suma_total)

    let parametros_consumo_tag
    let j_sumatoria_consumo_tag = 0
    let sumatoria_anterior_consumo_tag = 0

    for (let j = 0; j < categorias.length; j++) {

        j_sumatoria_consumo_tag += parseFloat(porcentajes_consumo_tag[j])
        console.log(j_sumatoria_consumo_tag)
        console.log(sumatoria_anterior_consumo_tag)
        sumatoria_anterior_consumo_tag = parseFloat(j_sumatoria_consumo_tag)-parseFloat(porcentajes_consumo_tag[j])

        if (j==0) {
            parametros_consumo_tag = colores[j]+" 0%,"
            parametros_consumo_tag = parametros_consumo_tag + colores[j] + " " + j_sumatoria_consumo_tag + "%, "
            console.log(j_sumatoria_consumo_tag)
            console.log(sumatoria_anterior_consumo_tag)
    

        } else if (j==categorias.length-1) {
            if (j_sumatoria_consumo_tag==sumatoria_anterior_consumo_tag) {
                // sumatoria_anterior_consumo_tag=100
                parametros_consumo_tag = parametros_consumo_tag + "black" + " " + sumatoria_anterior_consumo_tag + "%,"
                parametros_consumo_tag = parametros_consumo_tag + "black" + " " + "100%"
            } else {
                parametros_consumo_tag = parametros_consumo_tag + colores[j] + " " + sumatoria_anterior_consumo_tag + "%,"
                parametros_consumo_tag = parametros_consumo_tag + colores[j] + " " + "100%"
            }

        } else {
            parametros_consumo_tag = parametros_consumo_tag + colores[j] + " " + sumatoria_anterior_consumo_tag + "%, "
            parametros_consumo_tag = parametros_consumo_tag + colores[j] + " " + j_sumatoria_consumo_tag + "%, "
            console.log(j_sumatoria_consumo_tag)
            console.log(sumatoria_anterior_consumo_tag)
        }
    }
    // console.log(parametros_consumo_tag)

    let background_style_consumo_tag = `conic-gradient(${parametros_consumo_tag})`
    console.log(background_style_consumo_tag)
    let cont_grafica_unidades = mkObj(obj_temp,"cont_grafica_unidades")
        for (let j = 0; j < categorias.length; j++) {

            // let inner_contenido_filas_unidades = porcentajes_consumo_tag[j].toFixed(2)+"%"+consumo_tag[j]+" lt"//+"<br>"+"Carga: "+porcentajes_cargas[j].toFixed(2)+"% - "+cargas[j]+" lt"+"<br>"+"Consumo: "+porcentajes_consumos[j].toFixed(2)+"% - "+consumos[j]+" lt"+"<br>"+"Total: "+porcentajes_totales[j].toFixed(2)+"% - "+totales[j]+" lt"
            let inner_contenido_filas_unidades = categorias[j].replace(/[_]/," ").toUpperCase()+"<br>"+"TOTAL: $"+s[j]+"<br>"+"Porcentaje: "+porcentajes_consumo_tag[j].toFixed(2)+"%"

            let fila_unidades = mkObj(cont_grafica_unidades,"fila_unidades")

                let cont_color_unidades = mkObj(fila_unidades,"cont_color_unidades")
                    let color_unidades = mkObj(cont_color_unidades,"color_unidades")
                    color_unidades.style.background=colores[j]
                    // console.log(colores[j])

                let cont_name_unidades = mkObj(fila_unidades,"cont_name_unidades")
                    let name_unidades = mkObj(cont_name_unidades,"name_unidades","name_unidades_"+categorias[j],inner_contenido_filas_unidades)


        }

    let cont_grafica_contenido = mkObj(obj_temp,"cont_grafica_contenido")

        let grafica_consumo_tag = mkObj(cont_grafica_contenido,"grafica_valores_totales","")
        grafica_consumo_tag.style.background = background_style_consumo_tag
            let circle_consumo_tag = mkObj(grafica_consumo_tag,"grafic_circle","","Consumos")

    return obj_temp
}

function mkObjDatalist(n,c,i,...elementos){ // compatibilidad con objetos
    n?n:""
    c?c:""
    i?i:""
    elementos?elementos:""

    // let obj_temp = mkObj(n,"cont_"+c,"cont_"+i)

    let input_datalist = n.querySelector("input")
    input_datalist.setAttribute("list",i)

    let data_list_temp = document.createElement("datalist")
    data_list_temp.setAttribute("class",c)
    data_list_temp.setAttribute("id",i)

    for (let j = 0; j < elementos.length; j++) {
        let option_temp = document.createElement("option")
        option_temp.setAttribute("value",elementos[j])
        data_list_temp.appendChild(option_temp)
    }

    n.appendChild(data_list_temp)
    return data_list_temp
}

function mkObjDatalistTextarea(n,c,i,...elementos){ // compatibilidad con objetos
    n?n:""
    c?c:""
    i?i:""
    elementos?elementos:""

    // let obj_temp = mkObj(n,"cont_"+c,"cont_"+i)

    let input_datalist = n.querySelector("textarea")
    input_datalist.setAttribute("list",i)

    let data_list_temp = document.createElement("datalist")
    data_list_temp.setAttribute("class",c)
    data_list_temp.setAttribute("id",i)

    for (let j = 0; j < elementos.length; j++) {
        let option_temp = document.createElement("option")
        option_temp.setAttribute("value",elementos[j])
        data_list_temp.appendChild(option_temp)
    }

    n.appendChild(data_list_temp)
    return data_list_temp
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

function mkPestañaTablaMantenimiento(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n=""
    c?c:c=""
    i?i:i=""
    t?t:t=""
    f?f:f=""
    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
          }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
      if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
      }
      if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
      }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()
    // // console.log(fecha_)

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j],columnas[j])
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("nombre_operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() { //PETICION FILA
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            // console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);

                        let divs = []

                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                
                                console.log(columnas[j_].toLowerCase().replace(/[\s]/g,"_"))

                                let temp_column = columnas[j_].toLowerCase().replace(/[\s]/g,"_")
                                let temp_dato = datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")]

                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")]) // correccion: hay que asegurarse de que los valores esten bien represntados para evitar problemas al momento de llamar al contenido de la celda
                                let p_temp_element = obj_col_elementos_crp_cont.querySelector("p")

                                if (temp_column==='km_recorrido') {
                                    if (temp_dato===0||temp_dato==="") {
                                        p_temp_element.innerHTML=0
                                    }
                                }


                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                                    
                            }



                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                            let array_contenido_p_elementos = []
                            let array_columnas = []
                            for (let j2 = 0; j2 < contenido_p_elementos.length; j2++) {
                                array_contenido_p_elementos.push(contenido_p_elementos[j2].innerHTML)
                                array_columnas.push(contenido_p_elementos[j2].getAttribute("cell_class"))
                            }

                            /////////////////////////
                            /// AGREGAR UN ELEMENTO

                            // // console.log(array_contenido_p_elementos)

                            obj_elemento_crp_cont.addEventListener("mouseup",function () { // update_element
                                // // console.log(array_contenido_p_elementos)
                                let cont_update_row_element = mkObj(obj_crp_cont,"cont_update_row_element_"+c,"cont_update_row_element_"+i)
                                    let header_cont_update_row_element = mkObj(cont_update_row_element,"header_cont_update_row_element_"+c,"header_cont_update_row_element_"+i)
                                        let tittle_update_element = mkText(header_cont_update_row_element,"tittle_update_element","tittle_update_element","Actualizar Elemento.")
                                        let btn_cerrar_ventana_update = mkObj(header_cont_update_row_element,"btn_cerrar_ventana_update","btn_cerrar_ventana_update_"+i,"~")
                                        btn_cerrar_ventana_update.addEventListener("mouseup",()=>{
                                            cont_update_row_element.remove()
                                        })

                                    let cuerpo_header_cont_update_row_element = mkObj(cont_update_row_element,"cuerpo_header_cont_update_row_element_"+c,"cuerpo_header_cont_update_row_element"+i)

                                    for (let j3 = 0; j3 < array_contenido_p_elementos.length; j3++) {
                                        let input_update_elemento = mkObjInput(cuerpo_header_cont_update_row_element,"input_update_elemento_"+c,"","",columnas[j3])
                                        let in_up_elemento = input_update_elemento.querySelector("input")
                                        in_up_elemento.value = contenido_p_elementos[j3].innerHTML // valores internoes de inputs segun el inner de las p de la fila

                                        let temp_column = columnas[j3].toLowerCase().replace(/[\s]/g,"_")
                                        if (temp_column==="mantenimiento") {
                                            let datalist_mantenimiento = mkObjDatalist(input_update_elemento,"mantenimientos","mantenimientos",
                                                "LUCES",
                                                "ACEITE",
                                                "NEUMATICOS",
                                                "FRENOS",
                                                "ENGANCHE",
                                                "SUSPENSION",
                                                "SISTEMA ELECTRICO",
                                                "RODAMIENTOS",
                                                "PISO REMOLQUE"
                                            )
                                        }

                                        if (temp_column==="km_recorrido") {
                                            mathConcat(in_up_elemento)
                                        }
                                        console.log(temp_column)
                                        console.log(in_up_elemento)



                                    }
                                    // // console.log(array_contenido_p_elementos)

                                    let footer_cont_update_row_element = mkObj(cont_update_row_element,"footer_cont_update_row_element_"+c)
                                        let btn_send_update = mkObjButton(footer_cont_update_row_element,"btn_send_update_"+c,"btn_send_update_"+i,"Actualizar Información.")
                                        btn_send_update.querySelector("button").addEventListener("click",()=>{

                                            let array_inputs_update_menu = cuerpo_header_cont_update_row_element.querySelectorAll("input")
                                            // // console.log(array_inputs_update_menu)

                                            let formData = new FormData()
                                            // // console.log(t)
                                            formData.append("nombre_operador",t)
                                            for (let j4 = 0; j4 < contenido_p_elementos.length; j4++) {
                                                // // console.log(array_columnas[j4])
                                                // // console.log(array_contenido_p_elementos[j4])
                                                formData.append(array_columnas[j4].replace(/[\s]/g,"_"),array_inputs_update_menu[j4].value)
                                                // // console.log(array_columnas[j4].replace(/[\s]/g,"_"))

                                            }
                                            let peticion = new XMLHttpRequest()
                                            peticion.open("POST",url_)
                                            peticion.send(formData)
                                            peticion.onreadystatechange=function () {
                                                if (peticion.readyState==4&&peticion.status==200) {
                                                    let res = peticion.response
                                                    console.log(res)
                                                    if (res=="succes") {
                                                        for (let j5 = 0; j5 < contenido_p_elementos.length; j5++) {
                                                            contenido_p_elementos[j5].innerHTML=array_inputs_update_menu[j5].value
                                                        }
                                                        cont_update_row_element.remove()
                                                    }
                                                }
                                            }
                                        })
                            })

                        }

                        divs = Array.from(divs)

                        divs.sort(function(a, b) {
                            var dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            var dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });

                        // Vaciar el contenedor
                        obj_crp_cont.innerHTML = ''

                        // Agregar las divs ordenadas de nuevo al contenedor
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                // // console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    // createTable()
                                                    // setTimeout(calculateTabla,500)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTablaMantenimiento() {



                    for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS

                        let arr_int = [] // arreglo para valores enteros
                        let sum_arr_int = 0 // sumatoria de valores
                        let expresion_regular_num = /^[0-9]+$/


                        let obj_cell_fila_datos = mkText(    obj_fila_datos, cell_fila_datos_c,  "cell_fila_datos_"+t.toLowerCase().replace(/[\s]/g,"_")+"_"+           columnas[j].toLowerCase()+"_"+j   ,"0")
                        let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)




                        for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA
                            if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                                if (array_obj_node[j_].getAttribute("cell_class")=="km_total") { // adaptaciones para reportes de km_total
                                    obj_cell_fila_datos.firstChild.innerHTML=array_obj_node[j_].innerHTML

                                } else if (array_obj_node[j_].getAttribute("cell_class")=="km_origen") { // adaptaciones para reportes de km_total
                                    obj_cell_fila_datos.firstChild.innerHTML=array_obj_node[0].innerHTML
                                } else { // adaptaciones para reportes de km_total
                                    arr_int.push(parseInt(array_obj_node[j_].innerHTML))

                                    let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)

                                    obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                                }

                            } else {
                                obj_cell_fila_datos.firstChild.innerHTML = array_obj_node.length
                            }
                        }
                        arr_all_elements_totales.push(obj_cell_fila_datos.firstChild.innerHTML)
                    }

                    let check_fecha = arr_all_elements_totales[0]
                    let check_origen = arr_all_elements_totales[1]
                    let check_destino = arr_all_elements_totales[2]
                    let check_km_origen = arr_all_elements_totales[3]
                    let check_km_recorrido = arr_all_elements_totales[4]
                    let check_km_total = arr_all_elements_totales[5]
                    let check_mantenimiento = arr_all_elements_totales[6]
                    let check_mecanico = arr_all_elements_totales[7]
                    let check_costo_mantenimiento = arr_all_elements_totales[8]
                    let check_descripcion = arr_all_elements_totales[9]

                    if (check_km_total!=(parseInt(check_km_origen)+parseInt(check_km_recorrido))) {
                        console.log(`%cError en la información de totales: ${t}`,"color:#f7983e;")
                    }

            }
            setTimeout(calculateTablaMantenimiento,1250)
            //l(arr_all_elements_totales)
            let total = arr_all_elements_totales

            return {obj_temp,total}
}

function mkGraficMantenimiento(n,c,i,s,v,cl) { // nodo, clase, id, suma totales, totales / panel, columnas
    n?n:""
    c?c:""
    i?i:""
    s?s:""
    v?v:""
    cl?cl:""

    let obj_temp = mkObj(n,"grafic_"+c,"grafic_"+i)

    let km_origen = []
    let km_recorrido = []
    let km_total = []
    let costo_mantenimiento = []


    let suma_km_origen = s[3]
    let suma_km_recorrido = s[4]
    let suma_km_total = s[5]
    let suma_costo_mantenimiento = s[8]

    let porcentajes_km_origen = []
    let porcentajes_km_recorrido = []
    let porcentajes_km_total = []
    let porcentajes_costo_mantenimiento = []


    let unidades = []

    let porcentajes = []

    let colores = ["#FF5733","#00A8E8","#FFC300","#8A2BE2","#FF6363","#4CAF50","#9B59B6","#3498DB","#F39C12"]

                        // // // // // // // #FF5733 (Naranja)
                        // // // // // // // #00A8E8 (Azul claro)
                        // // // // // // // #FFC300 (Amarillo)
                        // // // // // // // #8A2BE2 (Azul violeta)
                        // // // // // // // #FF6363 (Rosa claro)
                        // // // // // // // #4CAF50 (Verde)
                        // // // // // // // #9B59B6 (Violeta)
                        // // // // // // // #3498DB (Azul)
                        // // // // // // // #F39C12 (Naranja claro)

    for (let j = 0; j < v.length; j++) {
        for (let j2 = 0; j2 < cl.length; j2++) {

            let cantidad_elemento = parseInt(v[j].total[j2+3])

            if (cl[j2]=="Km Origen") {
                km_origen.push(cantidad_elemento)
                porcentajes_km_origen.push((cantidad_elemento/suma_km_origen)*100)
            } else if (cl[j2]=="Km Recorrido") {
                km_recorrido.push(cantidad_elemento)
                porcentajes_km_recorrido.push((cantidad_elemento/suma_km_recorrido)*100)
            } else if (cl[j2]=="Km Total") {
                km_total.push(cantidad_elemento)
                porcentajes_km_total.push((cantidad_elemento/suma_km_total)*100)
            } else if (cl[j2]=="Costo Mantenimiento") {
                // console.log(v[j].total[8])
                cantidad_elemento = parseInt(v[j].total[8])
                costo_mantenimiento.push(cantidad_elemento)
                // console.log(cantidad_elemento)
                // console.log(suma_costo_mantenimiento)
                porcentajes_costo_mantenimiento.push((cantidad_elemento/suma_costo_mantenimiento)*100)
            }
        }
        unidades.push(v[j].obj_temp.getAttribute("id_panel"))
    }

    let parametros_km_origen
    let parametros_km_recorrido
    let parametros_km_total
    let parametros_costo_mantenimiento

    let j_sumatoria_km_origen = 0
    let j_sumatoria_km_recorrido = 0
    let j_sumatoria_km_total = 0
    let j_sumatoria_costo_mantenimiento = 0

    let sumatoria_anterior_km_origen = 0
    let sumatoria_anterior_km_recorrido = 0
    let sumatoria_anterior_km_total = 0
    let sumatoria_anterior_costo_mantenimiento = 0

    for (let j = 0; j < unidades.length; j++) {

        j_sumatoria_km_origen += parseFloat(porcentajes_km_origen[j])
        sumatoria_anterior_km_origen = parseFloat(j_sumatoria_km_origen)-parseFloat(porcentajes_km_origen[j])

        j_sumatoria_km_recorrido += parseFloat(porcentajes_km_recorrido[j])
        sumatoria_anterior_km_recorrido = parseFloat(j_sumatoria_km_recorrido)-parseFloat(porcentajes_km_recorrido[j])

        j_sumatoria_km_total += parseFloat(porcentajes_km_total[j])
        sumatoria_anterior_km_total = parseFloat(j_sumatoria_km_total)-parseFloat(porcentajes_km_total[j])


        j_sumatoria_costo_mantenimiento += parseFloat(porcentajes_costo_mantenimiento[j])
        sumatoria_anterior_costo_mantenimiento = parseFloat(j_sumatoria_costo_mantenimiento)-parseFloat(porcentajes_costo_mantenimiento[j])

        if (j==0) {
            parametros_km_origen = colores[j]+" 0%,"
            parametros_km_origen = parametros_km_origen + colores[j] + " " + j_sumatoria_km_origen + "%, "

            parametros_km_recorrido = colores[j]+" 0%,"
            parametros_km_recorrido = parametros_km_recorrido + colores[j] + " " + j_sumatoria_km_recorrido + "%, "

            parametros_km_total = colores[j]+" 0%,"
            parametros_km_total = parametros_km_total + colores[j] + " " + j_sumatoria_km_total + "%, "

            parametros_costo_mantenimiento = colores[j]+" 0%,"
            parametros_costo_mantenimiento = parametros_costo_mantenimiento + colores[j] + " " + j_sumatoria_costo_mantenimiento + "%, "

        } else if (j==unidades.length-1) {
            parametros_km_origen = parametros_km_origen + colores[j] + " " + sumatoria_anterior_km_origen + "%,"
            parametros_km_origen = parametros_km_origen + colores[j] + " " + "100%"

            parametros_km_recorrido = parametros_km_recorrido + colores[j] + " " + sumatoria_anterior_km_recorrido + "%,"
            parametros_km_recorrido = parametros_km_recorrido + colores[j] + " " + "100%"

            parametros_km_total = parametros_km_total + colores[j] + " " + sumatoria_anterior_km_total + "%,"
            parametros_km_total = parametros_km_total + colores[j] + " " + "100%"

            parametros_costo_mantenimiento = parametros_costo_mantenimiento + colores[j] + " " + sumatoria_anterior_costo_mantenimiento + "%,"
            parametros_costo_mantenimiento = parametros_costo_mantenimiento + colores[j] + " " + "100%"

        } else {
            parametros_km_origen = parametros_km_origen + colores[j] + " " + sumatoria_anterior_km_origen + "%, "
            parametros_km_origen = parametros_km_origen + colores[j] + " " + j_sumatoria_km_origen + "%, "

            parametros_km_recorrido = parametros_km_recorrido + colores[j] + " " + sumatoria_anterior_km_recorrido + "%, "
            parametros_km_recorrido = parametros_km_recorrido + colores[j] + " " + j_sumatoria_km_recorrido + "%, "

            parametros_km_total = parametros_km_total + colores[j] + " " + sumatoria_anterior_km_total + "%, "
            parametros_km_total = parametros_km_total + colores[j] + " " + j_sumatoria_km_total + "%, "

            parametros_costo_mantenimiento = parametros_costo_mantenimiento + colores[j] + " " + sumatoria_anterior_costo_mantenimiento + "%, "
            parametros_costo_mantenimiento = parametros_costo_mantenimiento + colores[j] + " " + j_sumatoria_costo_mantenimiento + "%, "

        }
    }

    let background_style_km_origen = `conic-gradient(${parametros_km_origen})`
    let background_style_km_recorrido = `conic-gradient(${parametros_km_recorrido})`
    let background_style_km_total = `conic-gradient(${parametros_km_total})`
    let background_style_costo_mantenimiento = `conic-gradient(${parametros_costo_mantenimiento})`
    let cont_grafica_unidades = mkObj(obj_temp,"cont_grafica_unidades")
        for (let j = 0; j < unidades.length; j++) {
            let inner_contenido_filas_unidades = unidades[j].replace(/[_]/," ").toUpperCase()+"<br>"+"Origen: "+porcentajes_km_origen[j].toFixed(2)+"% - "+km_origen[j]+" km"+"<br>"+"Recorrido: "+porcentajes_km_recorrido[j].toFixed(2)+"% - "+km_recorrido[j]+" km"+"<br>"+"Total: "+porcentajes_km_total[j].toFixed(2)+"% - "+km_total[j]+" km"+"<br>"+"Costo Mantenimiento: "+porcentajes_costo_mantenimiento[j].toFixed(2)+"% - "+costo_mantenimiento[j]+" $"

            let fila_unidades = mkObj(cont_grafica_unidades,"fila_unidades")

                let cont_color_unidades = mkObj(fila_unidades,"cont_color_unidades")
                    let color_unidades = mkObj(cont_color_unidades,"color_unidades")
                    color_unidades.style.background=colores[j]

                let cont_name_unidades = mkObj(fila_unidades,"cont_name_unidades")
                    let name_unidades = mkObj(cont_name_unidades,"name_unidades","name_unidades_"+unidades[j],inner_contenido_filas_unidades)


        }

    let cont_grafica_contenido = mkObj(obj_temp,"cont_grafica_contenido")

        let grafica_km_origen = mkObj(cont_grafica_contenido,"grafica_valores_costo_mantenimiento","")
        grafica_km_origen.style.background = background_style_km_origen
            let circle_km_origen = mkObj(grafica_km_origen,"grafic_circle","","km_origen")

        let grafica_km_recorrido = mkObj(cont_grafica_contenido,"grafica_valores_costo_mantenimiento","")
        grafica_km_recorrido.style.background = background_style_km_recorrido
            let circle_km_recorrido = mkObj(grafica_km_recorrido,"grafic_circle","","km_recorrido")

        let grafica_km_total = mkObj(cont_grafica_contenido,"grafica_valores_costo_mantenimiento","")
        grafica_km_total.style.background = background_style_km_total
            let circle_km_total = mkObj(grafica_km_total,"grafic_circle","","km_total")

        let grafica_costo_mantenimiento = mkObj(cont_grafica_contenido,"grafica_valores_costo_mantenimiento","")
        grafica_costo_mantenimiento.style.background = background_style_costo_mantenimiento
            let circle_costo_mantenimiento = mkObj(grafica_costo_mantenimiento,"grafic_circle","","costo_mantenimiento")

    return obj_temp
}

function verImg(nodo,clase,id){ // ! VIZUALIZAR UNA IMAGEN EN UNA PESTAÑA ()

    nodo=nodo||"body"
    clase=clase||""
    id=id||""

    let temp_img = event.target

    let body = document.body

    nodo.style.position="relative" // ! ASIGNAR PROPIEDAD RELATIVE AL NODO PARA PERMITIR UBICACION ABSOLUTA DE LA IMAGEN

        // ! SI EXISTE LA VENTANA CON LA IMGEN SE ELIMINA PARA VOLVER A CREAR
    let _hipercapa = document.getElementById(id+"_hipercapa")
    let _hipercapa_ = document.querySelector("."+clase+"_hipercapa")
    if (_hipercapa) {_hipercapa.remove()}
    if (_hipercapa_) {_hipercapa_.remove()}

    // ? CREACION DE HIPERCAPA
    let mk_hipercapa_img = mkObj(nodo,clase+"_hipercapa",id+"_hipercapa");mk_hipercapa_img.style.position="absolute";
        let mk_ventana_img = mkObj(mk_hipercapa_img,clase) //document.createElement("div")
            let mk_header_ventana_img = mkObj(mk_ventana_img,clase+"_header",id+"_header")

                    // ? INNER TITULO
                let inner_titulo_ventana = temp_img.getAttribute("src")/*.split("/").pop()*/
            let mk_titulo_hvi = mkObj(mk_header_ventana_img,clase+"titulo_header",id+"_titulo_header",inner_titulo_ventana) /// objeto del eveneto -> atributo directorio -> formato arreglo por directorios -> ultimo elemto

            let mk_btn_cerrar_ventana_img = mkObj(mk_header_ventana_img,"btn_cerrar_"+clase,"btn_cerrar_"+id,"X")
                mk_btn_cerrar_ventana_img.style.cursor="pointer"
    
                mk_btn_cerrar_ventana_img.addEventListener("click",function() {
                    history.replaceState({},document.title,window.location.href.replace(/#.*$/,"")) // ! MODIFICAR LINK DE NAVEGADOR
                    mk_hipercapa_img.remove()
                })

        let mk_cuerpo_ventana_img = mkObj(mk_ventana_img,clase+"_cuerpo_ventana_img")
                
                let atributo_img = temp_img.getAttribute("src")
            let mk_img_hipercap = mkObjImg(mk_cuerpo_ventana_img,"img_"+clase,"img_"+id,atributo_img)
            history.pushState({},"",`#${inner_titulo_ventana}`) // ! MODIFICAR LINK DE NAVEGADOR
}


function mkPestañaTablaGastos(n,c,i,t,f,url,url_,url__,...columnas) {
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";c==""?panel_c="":panel_c="panel_"+c;i==""?panel_i="":panel_i="panel_"+i;c==""?h_c="":h_c="header_"+c;i==""?h_i="":h_i="header_"+i;c==""?t_c="":t_c="titulo_"+c;i==""?t_i="":t_i="titulo_"+i;c==""?crp_c="":crp_c="cuerpo_"+c;i==""?crp_i="":crp_i="cuerpo_"+i;c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c;i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i;c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c;i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i;c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c;i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i;c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c;i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i;c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c;i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i;c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c;i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i;c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c;i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i;c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c;i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i;c==""?foo_c="":foo_c="footer_"+c;i==""?foo_i="":foo_i="footer_"+i;c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c;i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i;c==""?btn_add_c="":btn_add_c="btn_add_"+c;i==""?btn_add_i="":btn_add_i="btn_add_"+i;c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c;i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i;c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c;i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i;c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c;i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i;c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c;i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i;c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c;i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i;c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c;i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i;
    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()
    // // console.log(fecha_)

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j],columnas[j])
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("nombre_operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);

                        let divs = []


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont
                                obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s-]/g,"_")])
                                console.log(obj_col_elementos_crp_cont)
                                console.log(datos[j][columnas[j_].toLowerCase().replace(/[\s-]/g,"_")])

                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                            }

                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                            /////////////////////////
                            // console.log(array_contenido_p_elementos)

                            obj_elemento_crp_cont.addEventListener("mouseup",function () { // update_element
                                let array_contenido_p_elementos = []
                                let array_columnas = []
                                for (let j2 = 0; j2 < contenido_p_elementos.length; j2++) {
                                    array_contenido_p_elementos.push(contenido_p_elementos[j2].innerHTML)
                                    array_columnas.push(contenido_p_elementos[j2].getAttribute("cell_class"))
                                }

                                // console.log(array_contenido_p_elementos)
                                let cont_update_row_element = mkObj(obj_crp_cont,"cont_update_row_element_"+c,"cont_update_row_element_"+i)
                                    let header_cont_update_row_element = mkObj(cont_update_row_element,"header_cont_update_row_element_"+c,"header_cont_update_row_element_"+i)
                                        let tittle_update_element = mkText(header_cont_update_row_element,"tittle_update_element","tittle_update_element","Actualizar Elemento.")
                                        let btn_cerrar_ventana_update = mkObj(header_cont_update_row_element,"btn_cerrar_ventana_update","btn_cerrar_ventana_update_"+i,"~")
                                        btn_cerrar_ventana_update.addEventListener("mouseup",()=>{
                                            cont_update_row_element.remove()
                                        })

                                    let cuerpo_header_cont_update_row_element = mkObj(cont_update_row_element,"cuerpo_header_cont_update_row_element_"+c,"cuerpo_header_cont_update_row_element"+i)

                                    for (let j3 = 0; j3 < array_contenido_p_elementos.length; j3++) { //crear inputs
                                        let input_update_elemento = mkObjInput(cuerpo_header_cont_update_row_element,"input_update_elemento_"+c,"","",columnas[j3])
                                        let in_up_elemento = input_update_elemento.querySelector("input")
                                        
                                        in_up_elemento.value = array_contenido_p_elementos[j3] // valores de inputs segun arreglo, verificar y mejorar para que inserte los valores actuales
                                    }

                                    let array_update_inputs = cuerpo_header_cont_update_row_element.querySelectorAll("input")
                                    // console.log(array_update_inputs)
                                    let ar_up_in_fecha = array_update_inputs[0]
                                    let ar_up_in_origen = array_update_inputs[1]
                                    let ar_up_in_destino = array_update_inputs[2]   // actualizado -> tomar en cuenta la actualización en tableScripts
                                    let ar_up_in_existencia = array_update_inputs[3];mathConcat(ar_up_in_existencia);
                                    let ar_up_in_carga = array_update_inputs[4];mathConcat(ar_up_in_carga);
                                    let ar_up_in_consumo = array_update_inputs[5];mathConcat(ar_up_in_consumo);
                                    let ar_up_in_total = array_update_inputs[6];mathConcat(ar_up_in_total);
                                    let ar_up_in_costo = array_update_inputs[7];mathConcat(ar_up_in_costo);
                                    let ar_up_in_descripcion = array_update_inputs[8]

                                    



                                    let footer_cont_update_row_element = mkObj(cont_update_row_element,"footer_cont_update_row_element_"+c)
                                        let btn_send_update = mkObjButton(footer_cont_update_row_element,"btn_send_update_"+c,"btn_send_update_"+i,"Actualizar Información.")
                                        btn_send_update.querySelector("button").addEventListener("click",()=>{

                                            let array_inputs_update_menu = cuerpo_header_cont_update_row_element.querySelectorAll("input")


                                            let in_update_menu_existencia = array_inputs_update_menu[3]
                                            // console.log(in_update_menu_existencia)
                                            let in_update_menu_carga = array_inputs_update_menu[4]
                                            // console.log(in_update_menu_carga)
                                            let in_update_menu_consumo = array_inputs_update_menu[5]
                                            // console.log(in_update_menu_consumo)
                                            let in_update_menu_total = array_inputs_update_menu[6]
                                            // console.log(in_update_menu_total)
                                            let in_update_menu_costo = array_inputs_update_menu[7]
                                            // console.log(in_update_menu_costo)

                                            let int_update_menu_existencia = in_update_menu_existencia.value
                                            let int_update_menu_carga = in_update_menu_carga.value
                                            let int_update_menu_consumo = in_update_menu_consumo.value
                                            let int_update_menu_total = in_update_menu_total.value
                                            let int_update_menu_costo = in_update_menu_costo.value

                                            document.addEventListener("input",function (x) {
                                                if (in_update_menu_existencia.contains(x.target)||in_update_menu_carga.contains(x.target)||in_update_menu_consumo.contains(x.target)||in_update_menu_total.contains(x.target)||in_update_menu_costo.contains(x.target)) {
                                                    console.log("succes")
                                                    int_update_menu_total = parseInt(int_update_menu_existencia)+parseInt(int_update_menu_carga)-parseInt(int_update_menu_consumo)
                                                    int_update_menu_costo = parseInt(int_update_menu_consumo)*24
                                                }
                                            })

                                            // console.log(array_inputs_update_menu)

                                            let formData = new FormData()
                                            console.log(t)
                                            formData.append("nombre_operador",t)
                                            for (let j4 = 0; j4 < contenido_p_elementos.length; j4++) {
                                                // console.log(array_columnas[j4])
                                                // console.log(array_contenido_p_elementos[j4])
                                                formData.append(array_columnas[j4],array_inputs_update_menu[j4].value)
                                                console.log(array_columnas[j4])
                                                console.log(array_inputs_update_menu[j4].value)
                                            }
                                            let peticion = new XMLHttpRequest()
                                            peticion.open("POST",url_)
                                            peticion.send(formData)
                                            peticion.onreadystatechange=function () {
                                                if (peticion.readyState==4&&peticion.status==200) {
                                                    let res = peticion.response
                                                    console.log(res)
                                                    if (res=="succes") {
                                                        for (let j5 = 0; j5 < contenido_p_elementos.length; j5++) {
                                                            contenido_p_elementos[j5].innerHTML=array_inputs_update_menu[j5].value
                                                        }
                                                        cont_update_row_element.remove()
                                                    }
                                                }
                                            }
                                        })
                            })

                        }
                        divs = Array.from(divs)

                        // console.log(document.querySelectorAll("[cell_class=fecha]"))

                        divs.sort(function(a, b) {
                            var dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            var dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });

                        // Vaciar el contenedor
                        obj_crp_cont.innerHTML = ''

                        // Agregar las divs ordenadas de nuevo al contenedor
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)

            let arr_all_elements_totales = []

                // actualizado [si] -
            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())
                            
                    })
                }, 585);

                
            })

            return {obj_temp,arr_all_elements_totales}
}


function clearCuerpo() {
        // document.getElementById("inicio").style.display="none"
        // console.log(document.getElementById("inicio"))
        // flexNone(document.getElementById("inicio"))
    if (document.getElementById("inicio")) {document.getElementById("inicio").style.display="none"}
    if (document.getElementById("calendario")) {document.getElementById("calendario").remove()}
    if (document.getElementById("consumos")) {document.getElementById("consumos").remove()}
    if (document.getElementById("reportes_diesel")) {document.getElementById("reportes_diesel").remove()}
    if (document.getElementById("tags")) {document.getElementById("tags").remove()}
    if (document.getElementById("mantenimiento")) {document.getElementById("mantenimiento").remove()}
    if (document.getElementById("nominas")) {document.getElementById("nominas").remove()}
    if (document.getElementById("cobranza")) {document.getElementById("cobranza").remove()}
    if (document.getElementById("gastos")) {document.getElementById("gastos").remove()}                    
    if (document.getElementById("recuperaciones")) {document.getElementById("recuperaciones").remove()}
    if (document.getElementById("mantenimiento_kilometraje")) {document.getElementById("mantenimiento_kilometraje").remove()}
    if (document.getElementById("cobranza_diaria")) {document.getElementById("cobranza_diaria").remove()}
    if (document.getElementById("recuperaciones_unidades")) {document.getElementById("recuperaciones_unidades").remove()}
    
}

function mkTablaMantenimientoKilometraje(n,c,i,t,o,...columnas) {
    n?n:n=""
    c?c:c=""
    i?i:i=""
    t?t:t=""

    let obt_temp = mkObj(n,"cont_"+c,"cont_"+i)

        let contenido_principal = mkObj(obt_temp,c,i)
            let header_contenido = mkObj(contenido_principal,"header_"+c,"header_"+i)
                let titulo_header = mkText(header_contenido,"titulo_header_"+c,"titulo_header_"+i,t+": "+o)
            let cuerpo_contenido = mkObj(contenido_principal,"cuerpo_"+c,"cuerpo_"+i)

            let unidad = t.toLowerCase().replace(/[\s]/g,"_")

            let formData = new FormData()
            formData.append("unidad",t)
            formData.append("nombre_operador",o)


            for (let j = 0; j < columnas.length; j++) {
                // let bloque_mantenimiento = mkDoubleText(cuerpo_contenido,"bloque_mantenimiento_"+c,"bloque_mantenimiento_"+i+"_"+j,columnas[j])
                let temp_column = columnas[j].toLowerCase().replace(/[\s]/g,"_")
                formData.append(temp_column,temp_column)
                console.log(temp_column)
            }

            let peticion = new XMLHttpRequest()
            peticion.open("POST","./modelo/peticionMantenimientoKilometraje.php")
            peticion.send(formData)
            peticion.onreadystatechange=function () {
                if (peticion.readyState==4&&peticion.status==200) {
                    let res_mantenimiento_kilometraje = peticion.response

                    console.log(res_mantenimiento_kilometraje)
                    res_mantenimiento_kilometraje=JSON.parse(res_mantenimiento_kilometraje)
                    console.log(res_mantenimiento_kilometraje)
                    console.log(res_mantenimiento_kilometraje.length)
                    
                    let arreglo_rubros_mantenimiento = [
                        "LUCES",
                        "ACEITE",
                        "NEUMATICOS",
                        "FRENOS",
                        "ENGANCHE",
                        "SUSPENSION",
                        "SISTEMA ELECTRICO",
                        "RODAMIENTOS",
                        "PISO REMOLQUE",
                        "total_kilometros"
                    ]

                    let colores = [
                        "#FF573388",  // Rojo
                        "#33FF5788",  // Verde
                        "#336BFF88",  // Azul
                        "#FF33EC88",  // Rosa
                        "#33FFEC88",  // Cian
                        "#FFB93388",  // Amarillo
                        "#FF336388",  // Rojo oscuro
                        "#33C4FF88",  // Azul claro
                        "#FF33A388",  // Magenta
                        "#33FF9988",   // Verde claro
                        "#FF33EC88"  // Rosa

                      ];
                      

                    for (let j = 0; j < arreglo_rubros_mantenimiento.length; j++) {

                        let element_value = res_mantenimiento_kilometraje[arreglo_rubros_mantenimiento[j]]

                        // console.log(element_value)
                        let bloque_mantenimiento = mkDoubleText(cuerpo_contenido,"bloque_mantenimiento_"+c,"bloque_mantenimiento_"+i+"_"+j,
                            arreglo_rubros_mantenimiento[j],element_value
                        )

                        let contenedor_cantidad = bloque_mantenimiento.querySelectorAll(".cont_cell_double_text_bloque_mantenimiento_tablaMantenimientoKilometraje")
                        // console.log(contenedor_cantidad)
                        // console.log(contenedor_cantidad[1])
                        
                        bloque_mantenimiento.style.background=colores[j]
                        if (!element_value) {
                            contenedor_cantidad[1].style.background="red"
                            // console.log(element_value)
                            // console.log(bloque_mantenimiento)
                        }
                    }
                }
            }

    return obt_temp
}

function mkPestañaTablaMantenimientoKilometraje(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n=""
    c?c:c=""
    i?i:i=""
    t?t:t=""
    f?f:f=""
    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()
    // // // console.log(fecha_)

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j],columnas[j])
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("nombre_operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            // // console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);

                        let divs = []


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont
                                obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase()])
                                // // console.log(obj_col_elementos_crp_cont)

                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase())

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                            }



                            let check_fecha = fila_info[0]
                            // // console.log(check_fecha)
                            let check_origen = fila_info[1]
                            // // console.log(check_origen)
                            let check_destino = fila_info[2]
                            // // console.log(check_destino)
                            let check_existencia = parseInt(fila_info[3])
                            // // console.log(check_existencia)
                            let check_carga = parseInt(fila_info[4])
                            // // console.log(check_carga)
                            let check_consumo = parseInt(fila_info[5])
                            // // console.log(check_consumo)
                            let check_total = parseInt(fila_info[6])
                            // // console.log(check_total)

                            if (check_total!=(check_existencia+check_carga-check_consumo)) {
                                // console.log(`%cError en los datos del panel: ${t} | Fecha: ${check_fecha}, Origen : ${check_origen}, Destino ${check_destino}, Existencia: ${check_existencia}, Carga: ${check_carga}, Consumo: ${check_origen}, Total: ${check_total}`,"color:red;")
                                obj_elemento_crp_cont.style.background="#e75353"
                            }
                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                            /////////////////////////
                            // // console.log(array_contenido_p_elementos)

                            obj_elemento_crp_cont.addEventListener("mouseup",function () { // update_element
                                let array_contenido_p_elementos = []
                                let array_columnas = []
                                for (let j2 = 0; j2 < contenido_p_elementos.length; j2++) {
                                    array_contenido_p_elementos.push(contenido_p_elementos[j2].innerHTML)
                                    array_columnas.push(contenido_p_elementos[j2].getAttribute("cell_class"))
                                }

                                // // console.log(array_contenido_p_elementos)
                                let cont_update_row_element = mkObj(obj_crp_cont,"cont_update_row_element_"+c,"cont_update_row_element_"+i)
                                    let header_cont_update_row_element = mkObj(cont_update_row_element,"header_cont_update_row_element_"+c,"header_cont_update_row_element_"+i)
                                        let tittle_update_element = mkText(header_cont_update_row_element,"tittle_update_element","tittle_update_element","Actualizar Elemento.")
                                        let btn_cerrar_ventana_update = mkObj(header_cont_update_row_element,"btn_cerrar_ventana_update","btn_cerrar_ventana_update_"+i,"~")
                                        btn_cerrar_ventana_update.addEventListener("mouseup",()=>{
                                            cont_update_row_element.remove()
                                        })

                                    let cuerpo_header_cont_update_row_element = mkObj(cont_update_row_element,"cuerpo_header_cont_update_row_element_"+c,"cuerpo_header_cont_update_row_element"+i)

                                    for (let j3 = 0; j3 < array_contenido_p_elementos.length; j3++) { //crear inputs
                                        let input_update_elemento = mkObjInput(cuerpo_header_cont_update_row_element,"input_update_elemento_"+c,"","",columnas[j3])
                                        let in_up_elemento = input_update_elemento.querySelector("input")
                                        
                                        in_up_elemento.value = array_contenido_p_elementos[j3] // valores de inputs segun arreglo, verificar y mejorar para que inserte los valores actuales
                                    }

                                    let array_update_inputs = cuerpo_header_cont_update_row_element.querySelectorAll("input")
                                    // // console.log(array_update_inputs)
                                    let ar_up_in_fecha = array_update_inputs[0]
                                    let ar_up_in_origen = array_update_inputs[1]
                                    let ar_up_in_destino = array_update_inputs[2]   // actualizado -> tomar en cuenta la actualización en tableScripts
                                    let ar_up_in_existencia = array_update_inputs[3];mathConcat(ar_up_in_existencia);
                                    let ar_up_in_carga = array_update_inputs[4];mathConcat(ar_up_in_carga);
                                    let ar_up_in_consumo = array_update_inputs[5];mathConcat(ar_up_in_consumo);
                                    let ar_up_in_total = array_update_inputs[6];mathConcat(ar_up_in_total);
                                    let ar_up_in_costo = array_update_inputs[7];mathConcat(ar_up_in_costo);
                                    let ar_up_in_descripcion = array_update_inputs[8]

                                    document.addEventListener("input",function(x){
                                        if (ar_up_in_existencia.contains(x.target)||ar_up_in_carga.contains(x.target)||ar_up_in_consumo.contains(x.target)||ar_up_in_total.contains(x.target)||ar_up_in_costo.contains(x.target)) {
                                            ar_up_in_costo.value = parseInt(ar_up_in_consumo.value)*24
                                            ar_up_in_total.value = parseInt(ar_up_in_existencia.value)+parseInt(ar_up_in_carga.value)-parseInt(ar_up_in_consumo.value)
                                        }
                                    })



                                    let footer_cont_update_row_element = mkObj(cont_update_row_element,"footer_cont_update_row_element_"+c)
                                        let btn_send_update = mkObjButton(footer_cont_update_row_element,"btn_send_update_"+c,"btn_send_update_"+i,"Actualizar Información.")
                                        btn_send_update.querySelector("button").addEventListener("click",()=>{

                                            let array_inputs_update_menu = cuerpo_header_cont_update_row_element.querySelectorAll("input")


                                    let in_update_menu_existencia = array_inputs_update_menu[3]
                                    // // console.log(in_update_menu_existencia)
                                    let in_update_menu_carga = array_inputs_update_menu[4]
                                    // // console.log(in_update_menu_carga)
                                    let in_update_menu_consumo = array_inputs_update_menu[5]
                                    // // console.log(in_update_menu_consumo)
                                    let in_update_menu_total = array_inputs_update_menu[6]
                                    // // console.log(in_update_menu_total)
                                    let in_update_menu_costo = array_inputs_update_menu[7]
                                    // // console.log(in_update_menu_costo)

                                    let int_update_menu_existencia = in_update_menu_existencia.value
                                    let int_update_menu_carga = in_update_menu_carga.value
                                    let int_update_menu_consumo = in_update_menu_consumo.value
                                    let int_update_menu_total = in_update_menu_total.value
                                    let int_update_menu_costo = in_update_menu_costo.value

                                    document.addEventListener("input",function (x) {
                                        if (in_update_menu_existencia.contains(x.target)||in_update_menu_carga.contains(x.target)||in_update_menu_consumo.contains(x.target)||in_update_menu_total.contains(x.target)||in_update_menu_costo.contains(x.target)) {
                                            // console.log("succes")
                                            int_update_menu_total = parseInt(int_update_menu_existencia)+parseInt(int_update_menu_carga)-parseInt(int_update_menu_consumo)
                                            int_update_menu_costo = parseInt(int_update_menu_consumo)*24
                                        }
                                    })

                                            // // console.log(array_inputs_update_menu)

                                            let formData = new FormData()
                                            // console.log(t)
                                            formData.append("nombre_operador",t)
                                            for (let j4 = 0; j4 < contenido_p_elementos.length; j4++) {
                                                // // console.log(array_columnas[j4])
                                                // // console.log(array_contenido_p_elementos[j4])
                                                formData.append(array_columnas[j4],array_inputs_update_menu[j4].value)
                                                // console.log(array_inputs_update_menu[j4].value)
                                            }
                                            let peticion = new XMLHttpRequest()
                                            peticion.open("POST",url_)
                                            peticion.send(formData)
                                            peticion.onreadystatechange=function () {
                                                if (peticion.readyState==4&&peticion.status==200) {
                                                    let res = peticion.response
                                                    console.log(res)
                                                    if (res=="succes") {
                                                        for (let j5 = 0; j5 < contenido_p_elementos.length; j5++) {
                                                            contenido_p_elementos[j5].innerHTML=array_inputs_update_menu[j5].value
                                                        }
                                                        cont_update_row_element.remove()
                                                        // obj_elemento_crp_cont
                                                        let existencia = parseInt(array_inputs_update_menu[3].value)
                                                        let carga = parseInt(array_inputs_update_menu[4].value)
                                                        let consumo = parseInt(array_inputs_update_menu[5].value)
                                                        let total = parseInt(array_inputs_update_menu[6].value)
                                                        let costo = parseInt(array_inputs_update_menu[7].value)

                                                        // // console.log(array_inputs_update_menu_existencia,array_inputs_update_menu_carga,array_inputs_update_menu_consumo,array_inputs_update_menu_total)
                                                        // // console.log(array_inputs_update_menu)
                                                        if (total==(existencia+carga)-consumo) {
                                                            obj_elemento_crp_cont.style.background="none"
                                                            // // console.log("none")
                                                        } else {
                                                            obj_elemento_crp_cont.style.background="rgb(231, 83, 83)"
                                                            // // console.log("rojo")
                                                        }
                                                    }
                                                }
                                            }
                                        })
                            })

                        }
                        divs = Array.from(divs)

                        // // console.log(document.querySelectorAll("[cell_class=fecha]"))

                        divs.sort(function(a, b) {
                            var dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            var dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });

                        // Vaciar el contenedor
                        obj_crp_cont.innerHTML = ''

                        // Agregar las divs ordenadas de nuevo al contenedor
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    array_in_column[0].setAttribute("type","date")
                                    array_in_column[1].setAttribute("type","text")
                                    array_in_column[2].setAttribute("type","text")
                                    array_in_column[3].setAttribute("type","number")
                                    array_in_column[4].setAttribute("type","number")
                                    array_in_column[5].setAttribute("type","number")
                                    array_in_column[6].setAttribute("type","number")
                                    // // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                // console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    createTable()
                                                    setTimeout(calculateTabla,500)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTabla() {
                    for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS
                        let obj_cell_fila_datos = mkText(obj_fila_datos,cell_fila_datos_c,"cell_fila_datos_"+t.toLowerCase().replace(/[-\s]/g,"_")+"_"+columnas[j].toLowerCase()+"_"+j,"0")
                        let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)

                        let arr_int = []

                        let expresion_regular_num = /^[0-9]+$/

                        for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA
                            if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                                if (array_obj_node[j_].getAttribute("cell_class")=="total") { // adaptaciones para reportes de consumos
                                    obj_cell_fila_datos.firstChild.innerHTML=array_obj_node[j_].innerHTML

                                } else if (array_obj_node[j_].getAttribute("cell_class")=="existencia") { // adaptaciones para reportes de consumos
                                    obj_cell_fila_datos.firstChild.innerHTML=array_obj_node[0].innerHTML

                                } else { // adaptaciones para reportes de consumos
                                    arr_int.push(parseInt(array_obj_node[j_].innerHTML))
                                    let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)
                                    obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                                    // // console.log(t+"___•___"+sum_arr_int)
                                }

                            } else {
                                obj_cell_fila_datos.firstChild.innerHTML=array_obj_node.length
                            }
                        }
                        arr_all_elements_totales.push(parseInt(obj_cell_fila_datos.firstChild.innerHTML))
                    }

                    let check_fecha = arr_all_elements_totales[0]
                    let check_origen = arr_all_elements_totales[1]
                    let check_destino = arr_all_elements_totales[2]
                    let check_existencia = arr_all_elements_totales[3]
                    let check_carga = arr_all_elements_totales[4]
                    let check_consumo = arr_all_elements_totales[5]
                    let check_total = arr_all_elements_totales[6]

                    if (check_total!=(check_existencia+check_carga-check_consumo)) {
                        // console.log(`%cError en la información de totales: ${t}`,"color:#f7983e;")
                    }


                }
            setTimeout(calculateTabla,1250)
                // actualizado [si] -
            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())
                            
                    })
                }, 585);

                
            })

            return {obj_temp,arr_all_elements_totales}
}

// se pospone tabla de recuperaciones para prioriciar el mantenimiento y kilometrajes
function mkPestañaTablaRecuperaciones(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n=""
    c?c:c=""
    i?i:i=""
    t?t:t=""
    f?f:f=""
    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

                            // console.log(f)

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    // console.log(fecha_)
    fecha_ = fecha_.toISOString()
    // // // console.log(fecha_)

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))





        let cont_cuerpo_principal = mkObj(obj_temp,"cont_cuerpo_principal","cont_cuerpo_principal_"+i);stylerFlexDirection(cont_cuerpo_principal,"column")

        let obj_h = mkObj(cont_cuerpo_principal,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            // let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(cont_cuerpo_principal,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j],columnas[j])
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("nombre_operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);

                        let divs = []


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont
                                obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")])

                                let p_celda = obj_col_elementos_crp_cont.querySelector("p")
                                if (p_celda.innerHTML===""||p_celda.innerHTML==="0") {
                                    p_celda.style.background="#00000088"
                                }
                                // // console.log(obj_col_elementos_crp_cont)

                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase())

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                            }
                        }
                        divs = Array.from(divs)

                        // // console.log(document.querySelectorAll("[cell_class=fecha]"))

                        divs.sort(function(a, b) {
                            var dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            var dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });

                        // Vaciar el contenedor
                        obj_crp_cont.innerHTML = ''

                        // Agregar las divs ordenadas de nuevo al contenedor
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                    }
                }
            }






            setTimeout(() => {
                

                            /// FOOTER PANEL
                let obj_foo = mkObj(obj_temp,foo_c,foo_i);stylerFlexDirection(obj_foo,"column")
                // let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)

                // let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i);stylerFlexDirection(obj_fila_datos,"column")

                let formData = new FormData()
                formData.append("fecha",fecha_)
                formData.append("nombre_operador",t.toLowerCase().replace(/[\s]/g,"_"))

                let peticion = new XMLHttpRequest()
                peticion.open("POST",url_)
                peticion.send(formData)
                peticion.onreadystatechange=function () {
                    if (peticion.readyState==4&&peticion.status==200) {
                        let res = peticion.response
                        // // console.log("let res = "+res)

                        let datos = JSON.parse(res)

                        let claves = Object.keys(datos[0])
                        // // console.log("let claves = "+claves)
                        
                        let fila_superior_datos_saldos = mkObj(obj_foo,"fila_datos_saldos","fila_superior_datos_saldos")
                        // let fila_inferior_datos_saldos = mkObj(obj_foo,"fila_datos_saldos","fila_inferior_datos_saldos")

                        for (let j = 0; j < claves.length; j++) {
                            // // console.log(claves[j]+" : - : "+datos[0][claves[j]])
                            let element = parseFloat(datos[0][claves[j]])
                            let etiqueta_celda_saldo = mkDoubleText(fila_superior_datos_saldos,"etiqueta_celda_saldo","etiqueta_celda_saldo",claves[j].toUpperCase().replace(/[\_]/g," "),"$"+element.toFixed(2))
                        }

                    }
                }


        }, 1500);


    return obj_temp
}

function mkPestañaTablaRecuperacionesUnidades(n,c,i,t,f,url,url_,url__,...columnas) {
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";
    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c;i==""?panel_i="":panel_i="panel_"+i;
        //HEADER
        c==""?h_c="":h_c="header_"+c;i==""?h_i="":h_i="header_"+i;
            //TITULO
            c==""?t_c="":t_c="titulo_"+c;i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c;i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c;i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c;i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()
    // // console.log(fecha_)

    let t_db = t.toLowerCase().replace(/[\s-]/g,"_")

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t_db)
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j],columnas[j])
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("unidad",t.toLowerCase().replace())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);
                        console.log(datos)
                        // console.log(datos.length)
                        // console.log(datos[0])
                        // console.log(datos[0].length)
                        // console.log(typeof datos)

                        const keys_inicio = Object.keys(datos[0]);
                        const keys = Object.keys(datos[1]);
                        const keys_final = Object.keys(datos[2]);
                        // console.log(keys);


                        let divs = []


                        for (let j = 0; j < columnas.length; j++) { // filas
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []
                            // console.log(columnas[j])

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < keys.length; j_++) { // celdas


                                if (columnas[j]==="RUBROS RECUPERACIONES") {

                                let temp_key = keys[j_].replace(/[\_]/g," ").toUpperCase()
                                console.log(temp_key)

                                    let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+"rubros",temp_key)
                                }
                                if (columnas[j]==="EXISTENCIA RECUPERACIONES") {
                                    // console.log(datos[0])
                                    // console.log(datos[0].recuperacion_llantas_inicio)
                                    // console.log(datos[0][keys_inicio[0]])
                                    let valor_celda = parseFloat(datos[0][keys_inicio[j_]]).toFixed(2)
                                    let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+"rubros",valor_celda)
                                }
                                if (columnas[j]==="RECUPERACIONES SEMANA") {
                                    // console.log(datos[0])
                                    // console.log(datos[0].recuperacion_llantas_inicio)
                                    // console.log(datos[0][keys_inicio[0]])
                                    let valor_celda = parseFloat(datos[1][keys[j_]]).toFixed(2)
                                    let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+"rubros",valor_celda)
                                }

                                if (columnas[j]==="TOTAL RECUPERACIONES") {
                                    // console.log(datos[0])
                                    // console.log(datos[0].recuperacion_llantas_inicio)
                                    // console.log(datos[0][keys_inicio[0]])
                                    let valor_celda = parseFloat(datos[2][keys_final[j_]]).toFixed(2)
                                    let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+"rubros",valor_celda)
                                }

                                // let valor_celda = datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")]
                                // if (valor_celda===0) {
                                //     valor_celda="0"
                                // }
                                // let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,valor_celda)
                                // console.log(valor_celda)
                                // // console.log(obj_col_elementos_crp_cont)

                                // let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                // p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))

                                // fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                            }
                        }
                        // divs = Array.from(divs)

                        // // console.log(document.querySelectorAll("[cell_class=fecha]"))

                        // divs.sort(function(a, b) {
                        //     var dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                        //     var dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                        //     return dateA - dateB
                        // });

                        // // Vaciar el contenedor
                        // obj_crp_cont.innerHTML = ''

                        // // Agregar las divs ordenadas de nuevo al contenedor
                        // divs.forEach(function(div) {
                        //     obj_crp_cont.appendChild(div)
                        // });

                    }
                }
            }

            /// FOOTER PANEL

            let formData_kilometraje = new FormData()
            formData_kilometraje.append("unidad",t)
            formData_kilometraje.append("fecha",fecha_)


            let peticion_kilometraje = new XMLHttpRequest()
            peticion_kilometraje.open("POST",url_)
            peticion_kilometraje.send(formData_kilometraje)
            peticion_kilometraje.onreadystatechange=function () {
                if (peticion_kilometraje.readyState==4&&peticion_kilometraje.status==200) {
                    let res_kilometraje = peticion_kilometraje.response
                    console.log(res_kilometraje)
                    json_kilometraje = JSON.parse(res_kilometraje)
                    console.log(json_kilometraje)

                    let obj_dom_km_recorrido = insertInSpan(json_kilometraje[0]["km_recorrido"],"red")
                    let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                    let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"• Fecha Inicio: "+f+" • Kilometros Recorridos: "+obj_dom_km_recorrido)

                }
            }

            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                    })
                }, 585);


            })

            return {obj_temp/*,arr_all_elements_totales*/}
}


// nota /////////////////////////////////////////////////////////
// nota /////////////////////////////////////////////////////////
// nota /////////////////////////////////////////////////////////
// nota /////////////////////////////////////////////////////////
// nota /////////////////////////////////////////////////////////
// nota /////////////////////////////////////////////////////////

function mkPestañaTablaCobranzaCliente(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";

    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            // console.log(fecha_)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)

            let keys_columna = []

                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j].toLowerCase().replace(/[\s]/g,"_"),columnas[j])
                    keys_columna.push(columnas[j].toLowerCase().replace(/[\s]/g, "_"))
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("cliente",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);
                        // console.log(datos)

                        let divs = []
                        let divs_fecha_venta = []
                        let colores = ["##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd"]


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(datos[j])
                                // console.log([columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(obj_col_elementos_crp_cont)
                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))
                                p_obj_col_elementos_crp_cont.setAttribute("fecha",datos[j]["fecha"])
                                p_obj_col_elementos_crp_cont.setAttribute("date",new Date(datos[j]["fecha"]).toISOString())
                                p_obj_col_elementos_crp_cont.setAttribute("nombre_operador",datos[j]["nombre_operador"])
                                p_obj_col_elementos_crp_cont.setAttribute("columna",(columnas[j_].toLowerCase()).replace(/[\s]/g,"_"))

                                if (j_===0) {
                                    p_obj_col_elementos_crp_cont.style.background=colores[parseInt(p_obj_col_elementos_crp_cont.innerHTML.split("-").pop())]
                                }

                                // datos[j]

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)

                                // p_obj_col_elementos_crp_cont.addEventListener("mouseup",function () {

                                    

                                //     let nombre_operador = p_obj_col_elementos_crp_cont.getAttribute("nombre_operador")
                                //     let date = p_obj_col_elementos_crp_cont.getAttribute("date")
                                //     let fecha = p_obj_col_elementos_crp_cont.getAttribute("fecha")
                                //     let columna = p_obj_col_elementos_crp_cont.getAttribute("columna")
                                //     // console.log(p_obj_col_elementos_crp_cont)
                                //     if (document.getElementById("hipercapa_cobranza")) {
                                //         document.getElementById("hipercapa_cobranza").remove()
                                //     }
                                //     let hipercapa_cobranza = mkObj(obj_crp,"hipercapa_cobranza","hipercapa_cobranza");stylerPosition(obj_crp,"relative");stylerPosition(hipercapa_cobranza,"absolute");stylerzIndex(hipercapa_cobranza,"3");
                                //         hipercapa_cobranza.scrollIntoView({behavior:"smooth"})

                                //         let ventana_actualizar_dato_cobranza = mkObj(hipercapa_cobranza,"ventana_actualizar_dato_cobranza","ventana_actualizar_dato_cobranza")
                                //             let header_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"header_ventana_actualizar_dato_cobranza","header_ventana_actualizar_dato_cobranza")
                                //                 let tittle_header_ventana_actualizar_dato_cobranza = mkText(header_ventana_actualizar_dato_cobranza,"tittle_header_ventana_actualizar_dato_cobranza","tittle_header_ventana_actualizar_dato_cobranza","Actualizar información: "+columna+" - "+nombre_operador+" - "+fecha)
                                //                 let btn_cerrar_header_ventana_actualizar_dato_cobranza = mkObj(header_ventana_actualizar_dato_cobranza,"btn_cerrar_header_ventana_actualizar_dato_cobranza","btn_cerrar_header_ventana_actualizar_dato_cobranza","X")

                                //                 btn_cerrar_header_ventana_actualizar_dato_cobranza.addEventListener("mouseup",function () {
                                //                     hipercapa_cobranza.remove()
                                //                 })

                                //             let cuerpo_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"cuerpo_ventana_actualizar_dato_cobranza","cuerpo_ventana_actualizar_dato_cobranza")
                                //                 // let obj_input_actualizar_dato_cobranza = mkObjTextarea(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                //                 // let in_dato = obj_input_actualizar_dato_cobranza.querySelector("textarea")
                                //                 // in_dato.focus()
                                //                 // in_dato.value = p_obj_col_elementos_crp_cont.innerHTML

                                //                 let in_dato

                                //             ///    console.log(p_obj_col_elementos_crp_cont.getAttribute("cell_class"))
                                //                 if (p_obj_col_elementos_crp_cont.getAttribute("cell_class")==="fecha_venta") {
                                //                     let obj_input_actualizar_dato_cobranza = mkObjInput(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","date","Actualizar información","Ingresa la Información...")
                                //                         in_dato = obj_input_actualizar_dato_cobranza.querySelector("input")
                                //                         in_dato.focus()
                                //                         in_dato.value = p_obj_col_elementos_crp_cont.innerHTML
                                //                 } else {
                                //                     let obj_input_actualizar_dato_cobranza = mkObjTextarea(cuerpo_ventana_actualizar_dato_cobranza,"obj_textarea_actualizar_dato_cobranza","obj_textarea_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                //                         in_dato = obj_input_actualizar_dato_cobranza.querySelector("textarea")
                                //                         in_dato.focus()
                                //                         in_dato.value = p_obj_col_elementos_crp_cont.innerHTML    
                                //                 }

                                //             let footer_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"footer_ventana_actualizar_dato_cobranza","footer_ventana_actualizar_dato_cobranza")
                                //                 let btn_actualizar_footer_ventana_actualizar_dato_cobranza = mkObjButton(footer_ventana_actualizar_dato_cobranza,"btn_actualizar_footer_ventana_actualizar_dato_cobranza","btn_actualizar_footer_ventana_actualizar_dato_cobranza","Actualizar")

                                //                 btn_actualizar_footer_ventana_actualizar_dato_cobranza.addEventListener("click",function () {
                                //                     let formData = new FormData()
                                //                     formData.append("date",date)
                                //                     formData.append("nombre_operador",nombre_operador)
                                //                     formData.append("columna",columna)
                                //                     formData.append("dato",in_dato.value)

                                //                     let peticion = new XMLHttpRequest()
                                //                     peticion.open("POST",url_)
                                //                     peticion.send(formData)
                                //                     peticion.onreadystatechange=function () {
                                //                         if (peticion.readyState==4&&peticion.status==200) {

                                //                             console.log(`date -> ${date}`)
                                //                             console.log(`nombre_operador -> ${nombre_operador}`)
                                //                             console.log(`columna -> ${columna}`)
                                //                             console.log(`dato -> ${in_dato.value}`)
                                //                             console.log(peticion.response)
                                //                             if (peticion.response==="success") {
                                //                                 hipercapa_cobranza.remove()
                                //                                 p_obj_col_elementos_crp_cont.innerHTML = in_dato.value
                                //                             }
                                //                         }
                                //                     }
                                //                 })

                                //             setTimeout(() => {
                                //                 document.addEventListener("mouseup",function (x) {
                                //                     if (ventana_actualizar_dato_cobranza&&!ventana_actualizar_dato_cobranza.contains(x.target)) {
                                //                          hipercapa_cobranza.remove()
                                //                      }
                                //                  }) 
                                //             }, 500);
                                            
                                                
                                // })
                            }
                            obj_elemento_crp_cont.setAttribute("info_data",fila_info[0]+" "+fila_info[1]+" "+fila_info[13])
                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                        }


                        //ordenar cobranza por fecha normal
                        divs = Array.from(divs)
                        divs.sort(function(a, b) {
                            let dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            let dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });
                        obj_crp_cont.innerHTML = ''
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                        // nota ordenar cobranza por fecha de venta


                        let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                            divs.sort(function(a, b) {
                                let dateA = new Date(a.querySelector('[cell_class=fecha_venta]').textContent)
                                console.log(dateA)
                                let dateB = new Date(b.querySelector('[cell_class=fecha_venta]').textContent)
                                console.log(dateB)
                                return dateA - dateB
                            });
                            obj_crp_cont.innerHTML = ''
                            divs.forEach(function(div) {
                                obj_crp_cont.appendChild(div)
                            });
                        })
                        // ?  let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        // ?  console.log(btn_ordenar_fecha_venta)
                        // ?  btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                        // ?      console.log(btn_ordenar_fecha_venta)
                        // ?      let arreglo_columna_fecha_venta = obj_crp_cont.querySelectorAll("[cell_class=fecha]")
                        // ?      console.log(obj_crp_cont)
                        // ?      console.log(arreglo_columna_fecha_venta)
                        // ?  })

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    array_in_column[0].setAttribute("type","date")
                                    array_in_column[1].setAttribute("type","text")
                                    array_in_column[2].setAttribute("type","text")
                                    array_in_column[3].setAttribute("type","number")
                                    array_in_column[4].setAttribute("type","number")
                                    array_in_column[5].setAttribute("type","number")
                                    array_in_column[6].setAttribute("type","number")
                                    // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    createTable()
                                                    setTimeout(calculateTabla,500)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTabla() {
                    for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS
                        let obj_cell_fila_datos = mkText(obj_fila_datos,cell_fila_datos_c,"cell_fila_datos_"+t.toLowerCase().replace(/[-\s]/g,"_")+"_"+columnas[j].toLowerCase()+"_"+j,"0")
                        let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)

                        let arr_int = []

                        let expresion_regular_num = /^[\-0-9]+$/

                        for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA

                            let temp_columna = array_obj_node[j_].getAttribute("cell_class")
                            let contenido_celda = array_obj_node[j_].innerHTML
                            // console.log(array_obj_node)
                            console.log(temp_columna)
                            //if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                                if (

                                    temp_columna==="km_recorrido"||
                                    temp_columna==="tarimas"||
                                    temp_columna==="costo_flete_total"||
                                    temp_columna==="costo_flete_interno"||
                                    temp_columna==="costo_flete_externo"||
                                    temp_columna==="pago_operador"||
                                    temp_columna==="consumo_tag"||
                                    temp_columna==="gastos_federal"||
                                    temp_columna==="gastos_material"||
                                    temp_columna==="gastos_monta_enlonada"||
                                    temp_columna==="gastos_otros"||
                                    temp_columna==="gastos_variables_tracto"||
                                    temp_columna==="gastos_variables_remolque"||
                                    temp_columna==="gastos_otros"||
                                    temp_columna==="gastos_variables_tracto"||
                                    temp_columna==="gastos_variables_remolque"||
                                    temp_columna==="recuperacion_tracto"||
                                    temp_columna==="recuperacion_remolque"||
                                    temp_columna==="costo_diesel"||
                                    temp_columna==="utilidad_viaje"||
                                    temp_columna==="utilidad_extra"
                                    
                                    ) 
                                {
                                    let int_temp = contenido_celda===""?0:contenido_celda
                                    console.log(int_temp)
                                    arr_int.push(parseInt(int_temp))
                                    let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)
                                    obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                                }

                             else {
                                obj_cell_fila_datos.firstChild.innerHTML=array_obj_node.length
                            }
                        }
                        arr_all_elements_totales.push(parseInt(obj_cell_fila_datos.firstChild.innerHTML))
                    }
                let check_fecha = arr_all_elements_totales[0];
                let check_origen = arr_all_elements_totales[1];
                let check_destino = arr_all_elements_totales[2];
                let check_existencia = arr_all_elements_totales[3];
                let check_carga = arr_all_elements_totales[4];
                let check_consumo = arr_all_elements_totales[5];
                let check_total = arr_all_elements_totales[6];
            
                if (check_total != (check_existencia + check_carga - check_consumo)) {
                    console.log(`%cError en la información de totales: ${t}`, "color:#f7983e;");
                }
            }
                        setTimeout(calculateTabla,1250)
                // actualizado [si] -
            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                    })
                }, 585);


            })





            let t_return = obj_t
            return {obj_temp,arr_all_elements_totales,t_return}
}

function mkPestañaTablaCobranzaUnidad(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";

    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            // console.log(fecha_)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)

            let keys_columna = []

                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j].toLowerCase().replace(/[\s]/g,"_"),columnas[j])
                    keys_columna.push(columnas[j].toLowerCase().replace(/[\s]/g, "_"))
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("unidad",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);
                        // console.log(datos)

                        let divs = []
                        let divs_fecha_venta = []
                        let colores = ["##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd"]


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(datos[j])
                                // console.log([columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(obj_col_elementos_crp_cont)
                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))
                                p_obj_col_elementos_crp_cont.setAttribute("fecha",datos[j]["fecha"])
                                p_obj_col_elementos_crp_cont.setAttribute("date",new Date(datos[j]["fecha"]).toISOString())
                                p_obj_col_elementos_crp_cont.setAttribute("nombre_operador",datos[j]["nombre_operador"])
                                p_obj_col_elementos_crp_cont.setAttribute("columna",(columnas[j_].toLowerCase()).replace(/[\s]/g,"_"))

                                if (j_===0) {
                                    p_obj_col_elementos_crp_cont.style.background=colores[parseInt(p_obj_col_elementos_crp_cont.innerHTML.split("-").pop())]
                                }

                                // datos[j]

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)

                                // p_obj_col_elementos_crp_cont.addEventListener("mouseup",function () {

                                    

                                //     let nombre_operador = p_obj_col_elementos_crp_cont.getAttribute("nombre_operador")
                                //     let date = p_obj_col_elementos_crp_cont.getAttribute("date")
                                //     let fecha = p_obj_col_elementos_crp_cont.getAttribute("fecha")
                                //     let columna = p_obj_col_elementos_crp_cont.getAttribute("columna")
                                //     // console.log(p_obj_col_elementos_crp_cont)
                                //     if (document.getElementById("hipercapa_cobranza")) {
                                //         document.getElementById("hipercapa_cobranza").remove()
                                //     }
                                //     let hipercapa_cobranza = mkObj(obj_crp,"hipercapa_cobranza","hipercapa_cobranza");stylerPosition(obj_crp,"relative");stylerPosition(hipercapa_cobranza,"absolute");stylerzIndex(hipercapa_cobranza,"3");
                                //         hipercapa_cobranza.scrollIntoView({behavior:"smooth"})

                                //         let ventana_actualizar_dato_cobranza = mkObj(hipercapa_cobranza,"ventana_actualizar_dato_cobranza","ventana_actualizar_dato_cobranza")
                                //             let header_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"header_ventana_actualizar_dato_cobranza","header_ventana_actualizar_dato_cobranza")
                                //                 let tittle_header_ventana_actualizar_dato_cobranza = mkText(header_ventana_actualizar_dato_cobranza,"tittle_header_ventana_actualizar_dato_cobranza","tittle_header_ventana_actualizar_dato_cobranza","Actualizar información: "+columna+" - "+nombre_operador+" - "+fecha)
                                //                 let btn_cerrar_header_ventana_actualizar_dato_cobranza = mkObj(header_ventana_actualizar_dato_cobranza,"btn_cerrar_header_ventana_actualizar_dato_cobranza","btn_cerrar_header_ventana_actualizar_dato_cobranza","X")

                                //                 btn_cerrar_header_ventana_actualizar_dato_cobranza.addEventListener("mouseup",function () {
                                //                     hipercapa_cobranza.remove()
                                //                 })

                                //             let cuerpo_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"cuerpo_ventana_actualizar_dato_cobranza","cuerpo_ventana_actualizar_dato_cobranza")
                                //                 // let obj_input_actualizar_dato_cobranza = mkObjTextarea(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                //                 // let in_dato = obj_input_actualizar_dato_cobranza.querySelector("textarea")
                                //                 // in_dato.focus()
                                //                 // in_dato.value = p_obj_col_elementos_crp_cont.innerHTML

                                //                 let in_dato

                                //             ///    console.log(p_obj_col_elementos_crp_cont.getAttribute("cell_class"))
                                //                 if (p_obj_col_elementos_crp_cont.getAttribute("cell_class")==="fecha_venta") {
                                //                     let obj_input_actualizar_dato_cobranza = mkObjInput(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","date","Actualizar información","Ingresa la Información...")
                                //                         in_dato = obj_input_actualizar_dato_cobranza.querySelector("input")
                                //                         in_dato.focus()
                                //                         in_dato.value = p_obj_col_elementos_crp_cont.innerHTML
                                //                 } else {
                                //                     let obj_input_actualizar_dato_cobranza = mkObjTextarea(cuerpo_ventana_actualizar_dato_cobranza,"obj_textarea_actualizar_dato_cobranza","obj_textarea_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                //                         in_dato = obj_input_actualizar_dato_cobranza.querySelector("textarea")
                                //                         in_dato.focus()
                                //                         in_dato.value = p_obj_col_elementos_crp_cont.innerHTML    
                                //                 }

                                //             let footer_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"footer_ventana_actualizar_dato_cobranza","footer_ventana_actualizar_dato_cobranza")
                                //                 let btn_actualizar_footer_ventana_actualizar_dato_cobranza = mkObjButton(footer_ventana_actualizar_dato_cobranza,"btn_actualizar_footer_ventana_actualizar_dato_cobranza","btn_actualizar_footer_ventana_actualizar_dato_cobranza","Actualizar")

                                //                 btn_actualizar_footer_ventana_actualizar_dato_cobranza.addEventListener("click",function () {
                                //                     let formData = new FormData()
                                //                     formData.append("date",date)
                                //                     formData.append("nombre_operador",nombre_operador)
                                //                     formData.append("columna",columna)
                                //                     formData.append("dato",in_dato.value)

                                //                     let peticion = new XMLHttpRequest()
                                //                     peticion.open("POST",url_)
                                //                     peticion.send(formData)
                                //                     peticion.onreadystatechange=function () {
                                //                         if (peticion.readyState==4&&peticion.status==200) {

                                //                             console.log(`date -> ${date}`)
                                //                             console.log(`nombre_operador -> ${nombre_operador}`)
                                //                             console.log(`columna -> ${columna}`)
                                //                             console.log(`dato -> ${in_dato.value}`)
                                //                             console.log(peticion.response)
                                //                             if (peticion.response==="success") {
                                //                                 hipercapa_cobranza.remove()
                                //                                 p_obj_col_elementos_crp_cont.innerHTML = in_dato.value
                                //                             }
                                //                         }
                                //                     }
                                //                 })

                                //             setTimeout(() => {
                                //                 document.addEventListener("mouseup",function (x) {
                                //                     if (ventana_actualizar_dato_cobranza&&!ventana_actualizar_dato_cobranza.contains(x.target)) {
                                //                          hipercapa_cobranza.remove()
                                //                      }
                                //                  }) 
                                //             }, 500);
                                            
                                                
                                // })
                            }
                            obj_elemento_crp_cont.setAttribute("info_data",fila_info[0]+" "+fila_info[1]+" "+fila_info[13])
                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                        }


                        //ordenar cobranza por fecha normal
                        divs = Array.from(divs)
                        divs.sort(function(a, b) {
                            let dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            let dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });
                        obj_crp_cont.innerHTML = ''
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                        // nota ordenar cobranza por fecha de venta


                        let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                            divs.sort(function(a, b) {
                                let dateA = new Date(a.querySelector('[cell_class=fecha_venta]').textContent)
                                console.log(dateA)
                                let dateB = new Date(b.querySelector('[cell_class=fecha_venta]').textContent)
                                console.log(dateB)
                                return dateA - dateB
                            });
                            obj_crp_cont.innerHTML = ''
                            divs.forEach(function(div) {
                                obj_crp_cont.appendChild(div)
                            });
                        })
                        // ?  let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        // ?  console.log(btn_ordenar_fecha_venta)
                        // ?  btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                        // ?      console.log(btn_ordenar_fecha_venta)
                        // ?      let arreglo_columna_fecha_venta = obj_crp_cont.querySelectorAll("[cell_class=fecha]")
                        // ?      console.log(obj_crp_cont)
                        // ?      console.log(arreglo_columna_fecha_venta)
                        // ?  })

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    array_in_column[0].setAttribute("type","date")
                                    array_in_column[1].setAttribute("type","text")
                                    array_in_column[2].setAttribute("type","text")
                                    array_in_column[3].setAttribute("type","number")
                                    array_in_column[4].setAttribute("type","number")
                                    array_in_column[5].setAttribute("type","number")
                                    array_in_column[6].setAttribute("type","number")
                                    // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    createTable()
                                                    setTimeout(calculateTabla,500)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTabla() {
                for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS
                    let obj_cell_fila_datos = mkText(obj_fila_datos,cell_fila_datos_c,"cell_fila_datos_"+t.toLowerCase().replace(/[-\s]/g,"_")+"_"+columnas[j].toLowerCase()+"_"+j,"0")
                    let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)

                    let arr_int = []

                    let expresion_regular_num = /^[\-0-9]+$/

                    for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA

                        let temp_columna = array_obj_node[j_].getAttribute("cell_class")
                        let contenido_celda = array_obj_node[j_].innerHTML
                        // console.log(array_obj_node)
                        console.log(temp_columna)
                        //if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                            if (

                                temp_columna==="km_recorrido"||
                                temp_columna==="tarimas"||
                                temp_columna==="costo_flete_total"||
                                temp_columna==="costo_flete_interno"||
                                temp_columna==="costo_flete_externo"||
                                temp_columna==="pago_operador"||
                                temp_columna==="consumo_tag"||
                                temp_columna==="gastos_federal"||
                                temp_columna==="gastos_material"||
                                temp_columna==="gastos_monta_enlonada"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="recuperacion_tracto"||
                                temp_columna==="recuperacion_remolque"||
                                temp_columna==="costo_diesel"||
                                temp_columna==="utilidad_viaje"||
                                temp_columna==="utilidad_extra"
                                
                                ) 
                            {
                                let int_temp = contenido_celda===""?0:contenido_celda
                                console.log(int_temp)
                                arr_int.push(parseInt(int_temp))
                                let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)
                                obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                            }

                         else {
                            obj_cell_fila_datos.firstChild.innerHTML=array_obj_node.length
                        }
                    }
                    arr_all_elements_totales.push(parseInt(obj_cell_fila_datos.firstChild.innerHTML))
                }
        
                let check_fecha = arr_all_elements_totales[0];
                let check_origen = arr_all_elements_totales[1];
                let check_destino = arr_all_elements_totales[2];
                let check_existencia = arr_all_elements_totales[3];
                let check_carga = arr_all_elements_totales[4];
                let check_consumo = arr_all_elements_totales[5];
                let check_total = arr_all_elements_totales[6];
            
                if (check_total != (check_existencia + check_carga - check_consumo)) {
                    console.log(`%cError en la información de totales: ${t}`, "color:#f7983e;");
                }
            }
                        setTimeout(calculateTabla,1250)
                // actualizado [si] -
            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                    })
                }, 585);


            })





            let t_return = obj_t
            return {obj_temp,arr_all_elements_totales,t_return}
}

function mkPestañaTablaCobranzaOperador(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";

    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            // console.log(fecha_)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)

            let keys_columna = []

                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j].toLowerCase().replace(/[\s]/g,"_"),columnas[j])
                    keys_columna.push(columnas[j].toLowerCase().replace(/[\s]/g, "_"))
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);
                        // console.log(datos)

                        let divs = []
                        let divs_fecha_venta = []
                        let colores = ["##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd"]


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(datos[j])
                                // console.log([columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(obj_col_elementos_crp_cont)
                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))
                                p_obj_col_elementos_crp_cont.setAttribute("fecha",datos[j]["fecha"])
                                p_obj_col_elementos_crp_cont.setAttribute("date",new Date(datos[j]["fecha"]).toISOString())
                                p_obj_col_elementos_crp_cont.setAttribute("nombre_operador",datos[j]["nombre_operador"])
                                p_obj_col_elementos_crp_cont.setAttribute("columna",(columnas[j_].toLowerCase()).replace(/[\s]/g,"_"))

                                if (j_===0) {
                                    p_obj_col_elementos_crp_cont.style.background=colores[parseInt(p_obj_col_elementos_crp_cont.innerHTML.split("-").pop())]
                                }

                                // datos[j]

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)

                                // p_obj_col_elementos_crp_cont.addEventListener("mouseup",function () {

                                    

                                //     let nombre_operador = p_obj_col_elementos_crp_cont.getAttribute("nombre_operador")
                                //     let date = p_obj_col_elementos_crp_cont.getAttribute("date")
                                //     let fecha = p_obj_col_elementos_crp_cont.getAttribute("fecha")
                                //     let columna = p_obj_col_elementos_crp_cont.getAttribute("columna")
                                //     // console.log(p_obj_col_elementos_crp_cont)
                                //     if (document.getElementById("hipercapa_cobranza")) {
                                //         document.getElementById("hipercapa_cobranza").remove()
                                //     }
                                //     let hipercapa_cobranza = mkObj(obj_crp,"hipercapa_cobranza","hipercapa_cobranza");stylerPosition(obj_crp,"relative");stylerPosition(hipercapa_cobranza,"absolute");stylerzIndex(hipercapa_cobranza,"3");
                                //         hipercapa_cobranza.scrollIntoView({behavior:"smooth"})

                                //         let ventana_actualizar_dato_cobranza = mkObj(hipercapa_cobranza,"ventana_actualizar_dato_cobranza","ventana_actualizar_dato_cobranza")
                                //             let header_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"header_ventana_actualizar_dato_cobranza","header_ventana_actualizar_dato_cobranza")
                                //                 let tittle_header_ventana_actualizar_dato_cobranza = mkText(header_ventana_actualizar_dato_cobranza,"tittle_header_ventana_actualizar_dato_cobranza","tittle_header_ventana_actualizar_dato_cobranza","Actualizar información: "+columna+" - "+nombre_operador+" - "+fecha)
                                //                 let btn_cerrar_header_ventana_actualizar_dato_cobranza = mkObj(header_ventana_actualizar_dato_cobranza,"btn_cerrar_header_ventana_actualizar_dato_cobranza","btn_cerrar_header_ventana_actualizar_dato_cobranza","X")

                                //                 btn_cerrar_header_ventana_actualizar_dato_cobranza.addEventListener("mouseup",function () {
                                //                     hipercapa_cobranza.remove()
                                //                 })

                                //             let cuerpo_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"cuerpo_ventana_actualizar_dato_cobranza","cuerpo_ventana_actualizar_dato_cobranza")
                                //                 // let obj_input_actualizar_dato_cobranza = mkObjTextarea(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                //                 // let in_dato = obj_input_actualizar_dato_cobranza.querySelector("textarea")
                                //                 // in_dato.focus()
                                //                 // in_dato.value = p_obj_col_elementos_crp_cont.innerHTML

                                //                 let in_dato

                                //             ///    console.log(p_obj_col_elementos_crp_cont.getAttribute("cell_class"))
                                //                 if (p_obj_col_elementos_crp_cont.getAttribute("cell_class")==="fecha_venta") {
                                //                     let obj_input_actualizar_dato_cobranza = mkObjInput(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","date","Actualizar información","Ingresa la Información...")
                                //                         in_dato = obj_input_actualizar_dato_cobranza.querySelector("input")
                                //                         in_dato.focus()
                                //                         in_dato.value = p_obj_col_elementos_crp_cont.innerHTML
                                //                 } else {
                                //                     let obj_input_actualizar_dato_cobranza = mkObjTextarea(cuerpo_ventana_actualizar_dato_cobranza,"obj_textarea_actualizar_dato_cobranza","obj_textarea_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                //                         in_dato = obj_input_actualizar_dato_cobranza.querySelector("textarea")
                                //                         in_dato.focus()
                                //                         in_dato.value = p_obj_col_elementos_crp_cont.innerHTML    
                                //                 }

                                //             let footer_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"footer_ventana_actualizar_dato_cobranza","footer_ventana_actualizar_dato_cobranza")
                                //                 let btn_actualizar_footer_ventana_actualizar_dato_cobranza = mkObjButton(footer_ventana_actualizar_dato_cobranza,"btn_actualizar_footer_ventana_actualizar_dato_cobranza","btn_actualizar_footer_ventana_actualizar_dato_cobranza","Actualizar")

                                //                 btn_actualizar_footer_ventana_actualizar_dato_cobranza.addEventListener("click",function () {
                                //                     let formData = new FormData()
                                //                     formData.append("date",date)
                                //                     formData.append("nombre_operador",nombre_operador)
                                //                     formData.append("columna",columna)
                                //                     formData.append("dato",in_dato.value)

                                //                     let peticion = new XMLHttpRequest()
                                //                     peticion.open("POST",url_)
                                //                     peticion.send(formData)
                                //                     peticion.onreadystatechange=function () {
                                //                         if (peticion.readyState==4&&peticion.status==200) {

                                //                             console.log(`date -> ${date}`)
                                //                             console.log(`nombre_operador -> ${nombre_operador}`)
                                //                             console.log(`columna -> ${columna}`)
                                //                             console.log(`dato -> ${in_dato.value}`)
                                //                             console.log(peticion.response)
                                //                             if (peticion.response==="success") {
                                //                                 hipercapa_cobranza.remove()
                                //                                 p_obj_col_elementos_crp_cont.innerHTML = in_dato.value
                                //                             }
                                //                         }
                                //                     }
                                //                 })

                                //             setTimeout(() => {
                                //                 document.addEventListener("mouseup",function (x) {
                                //                     if (ventana_actualizar_dato_cobranza&&!ventana_actualizar_dato_cobranza.contains(x.target)) {
                                //                          hipercapa_cobranza.remove()
                                //                      }
                                //                  }) 
                                //             }, 500);
                                            
                                                
                                // })
                            }
                            obj_elemento_crp_cont.setAttribute("info_data",fila_info[0]+" "+fila_info[1]+" "+fila_info[13])
                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                        }


                        //ordenar cobranza por fecha normal
                        divs = Array.from(divs)
                        divs.sort(function(a, b) {
                            let dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            let dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });
                        obj_crp_cont.innerHTML = ''
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                        // nota ordenar cobranza por fecha de venta


                        let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                            divs.sort(function(a, b) {
                                let dateA = new Date(a.querySelector('[cell_class=fecha_venta]').textContent)
                                console.log(dateA)
                                let dateB = new Date(b.querySelector('[cell_class=fecha_venta]').textContent)
                                console.log(dateB)
                                return dateA - dateB
                            });
                            obj_crp_cont.innerHTML = ''
                            divs.forEach(function(div) {
                                obj_crp_cont.appendChild(div)
                            });
                        })
                        // ?  let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        // ?  console.log(btn_ordenar_fecha_venta)
                        // ?  btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                        // ?      console.log(btn_ordenar_fecha_venta)
                        // ?      let arreglo_columna_fecha_venta = obj_crp_cont.querySelectorAll("[cell_class=fecha]")
                        // ?      console.log(obj_crp_cont)
                        // ?      console.log(arreglo_columna_fecha_venta)
                        // ?  })

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    array_in_column[0].setAttribute("type","date")
                                    array_in_column[1].setAttribute("type","text")
                                    array_in_column[2].setAttribute("type","text")
                                    array_in_column[3].setAttribute("type","number")
                                    array_in_column[4].setAttribute("type","number")
                                    array_in_column[5].setAttribute("type","number")
                                    array_in_column[6].setAttribute("type","number")
                                    // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    createTable()
                                                    setTimeout(calculateTabla,500)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTabla() {
                for (let j = 0; j < columnas.length; j++) { // Recorre las columnas de la tabla

                    console.log(keys_columna)

                    // Crea una celda en la fila de datos
                    let obj_cell_fila_datos = mkText(obj_fila_datos, cell_fila_datos_c, "cell_fila_datos_" + t.toLowerCase().replace(/[-\s]/g, "_") + "_" + columnas[j].toLowerCase() + "_" + j, "0");
                    // Nota: Esta celda se utiliza para almacenar datos.
            
                    // Busca todos los elementos con la clase de la columna actual
                    let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g, "_")}]`);
            
                    let arr_int = [];
            
                    let expresion_regular_num = /^[0-9]+$/;
            
                    for (let j_ = 0; j_ < array_obj_node.length; j_++) { // Calcula el contenido de cada celda
                        if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                            if (array_obj_node[j_].getAttribute("cell_class") == "total") { // Adaptaciones para reportes de consumos si es total
                                obj_cell_fila_datos.firstChild.innerHTML = array_obj_node[j_].innerHTML; // entonces es igua al ultimo


                            } else if (array_obj_node[j_].getAttribute("cell_class") == "existencia") { // Adaptaciones para reportes de consumos si es existencia
                                obj_cell_fila_datos.firstChild.innerHTML = array_obj_node[0].innerHTML; // entoces es el primero


                            } else { // Adaptaciones para reportes de consumos
                                arr_int.push(parseInt(array_obj_node[j_].innerHTML));
                                let sum_arr_int = arr_int.reduce((acumulardor, elemento) => acumulardor + elemento, 0);
                                obj_cell_fila_datos.firstChild.innerHTML = sum_arr_int;
                                // console.log(t + "___•___" + sum_arr_int);
                            }

                        } else {
                            obj_cell_fila_datos.firstChild.innerHTML = array_obj_node.length;
                        }
                    }
                    arr_all_elements_totales.push(parseInt(obj_cell_fila_datos.firstChild.innerHTML));
                }
            
                let check_fecha = arr_all_elements_totales[0];
                let check_origen = arr_all_elements_totales[1];
                let check_destino = arr_all_elements_totales[2];
                let check_existencia = arr_all_elements_totales[3];
                let check_carga = arr_all_elements_totales[4];
                let check_consumo = arr_all_elements_totales[5];
                let check_total = arr_all_elements_totales[6];
            
                if (check_total != (check_existencia + check_carga - check_consumo)) {
                    console.log(`%cError en la información de totales: ${t}`, "color:#f7983e;");
                }
            }
                        setTimeout(calculateTabla,1250)
                // actualizado [si] -
            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                    })
                }, 585);


            })





            let t_return = obj_t
            return {obj_temp,arr_all_elements_totales,t_return}
}


function mkPestañaTablaCobranzaDiaria(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";

    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            // console.log(fecha_)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)

            let keys_columna = []

                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j].toLowerCase().replace(/[\s]/g,"_"),columnas[j])
                    keys_columna.push(columnas[j].toLowerCase().replace(/[\s]/g, "_"))
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                // formData_.append("operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);
                        // console.log(datos)

                        let divs = []
                        let divs_fecha_venta = []
                        let colores = ["##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd"]


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(datos[j])
                                // console.log([columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(obj_col_elementos_crp_cont)
                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))
                                p_obj_col_elementos_crp_cont.setAttribute("fecha",datos[j]["fecha"])
                                p_obj_col_elementos_crp_cont.setAttribute("date",new Date(datos[j]["fecha"]).toISOString())
                                p_obj_col_elementos_crp_cont.setAttribute("nombre_operador",datos[j]["nombre_operador"])
                                p_obj_col_elementos_crp_cont.setAttribute("columna",(columnas[j_].toLowerCase()).replace(/[\s]/g,"_"))

                                if (j_===0) {
                                    p_obj_col_elementos_crp_cont.style.background=colores[parseInt(p_obj_col_elementos_crp_cont.innerHTML.split("-").pop())]
                                }

                                // datos[j]

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)

                                // p_obj_col_elementos_crp_cont.addEventListener("mouseup",function () {

                                    

                                //     let nombre_operador = p_obj_col_elementos_crp_cont.getAttribute("nombre_operador")
                                //     let date = p_obj_col_elementos_crp_cont.getAttribute("date")
                                //     let fecha = p_obj_col_elementos_crp_cont.getAttribute("fecha")
                                //     let columna = p_obj_col_elementos_crp_cont.getAttribute("columna")
                                //     // console.log(p_obj_col_elementos_crp_cont)
                                //     if (document.getElementById("hipercapa_cobranza")) {
                                //         document.getElementById("hipercapa_cobranza").remove()
                                //     }
                                //     let hipercapa_cobranza = mkObj(obj_crp,"hipercapa_cobranza","hipercapa_cobranza");stylerPosition(obj_crp,"relative");stylerPosition(hipercapa_cobranza,"absolute");stylerzIndex(hipercapa_cobranza,"3");
                                //         hipercapa_cobranza.scrollIntoView({behavior:"smooth"})

                                //         let ventana_actualizar_dato_cobranza = mkObj(hipercapa_cobranza,"ventana_actualizar_dato_cobranza","ventana_actualizar_dato_cobranza")
                                //             let header_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"header_ventana_actualizar_dato_cobranza","header_ventana_actualizar_dato_cobranza")
                                //                 let tittle_header_ventana_actualizar_dato_cobranza = mkText(header_ventana_actualizar_dato_cobranza,"tittle_header_ventana_actualizar_dato_cobranza","tittle_header_ventana_actualizar_dato_cobranza","Actualizar información: "+columna+" - "+nombre_operador+" - "+fecha)
                                //                 let btn_cerrar_header_ventana_actualizar_dato_cobranza = mkObj(header_ventana_actualizar_dato_cobranza,"btn_cerrar_header_ventana_actualizar_dato_cobranza","btn_cerrar_header_ventana_actualizar_dato_cobranza","X")

                                //                 btn_cerrar_header_ventana_actualizar_dato_cobranza.addEventListener("mouseup",function () {
                                //                     hipercapa_cobranza.remove()
                                //                 })

                                //             let cuerpo_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"cuerpo_ventana_actualizar_dato_cobranza","cuerpo_ventana_actualizar_dato_cobranza")
                                //                 // let obj_input_actualizar_dato_cobranza = mkObjTextarea(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                //                 // let in_dato = obj_input_actualizar_dato_cobranza.querySelector("textarea")
                                //                 // in_dato.focus()
                                //                 // in_dato.value = p_obj_col_elementos_crp_cont.innerHTML

                                //                 let in_dato

                                //             ///    console.log(p_obj_col_elementos_crp_cont.getAttribute("cell_class"))
                                //                 if (p_obj_col_elementos_crp_cont.getAttribute("cell_class")==="fecha_venta") {
                                //                     let obj_input_actualizar_dato_cobranza = mkObjInput(cuerpo_ventana_actualizar_dato_cobranza,"obj_input_actualizar_dato_cobranza","obj_input_actualizar_dato_cobranza","date","Actualizar información","Ingresa la Información...")
                                //                         in_dato = obj_input_actualizar_dato_cobranza.querySelector("input")
                                //                         in_dato.focus()
                                //                         in_dato.value = p_obj_col_elementos_crp_cont.innerHTML
                                //                 } else {
                                //                     let obj_input_actualizar_dato_cobranza = mkObjTextarea(cuerpo_ventana_actualizar_dato_cobranza,"obj_textarea_actualizar_dato_cobranza","obj_textarea_actualizar_dato_cobranza","Actualizar información","Ingresa la Información...")
                                //                         in_dato = obj_input_actualizar_dato_cobranza.querySelector("textarea")
                                //                         in_dato.focus()
                                //                         in_dato.value = p_obj_col_elementos_crp_cont.innerHTML    
                                //                 }

                                //             let footer_ventana_actualizar_dato_cobranza = mkObj(ventana_actualizar_dato_cobranza,"footer_ventana_actualizar_dato_cobranza","footer_ventana_actualizar_dato_cobranza")
                                //                 let btn_actualizar_footer_ventana_actualizar_dato_cobranza = mkObjButton(footer_ventana_actualizar_dato_cobranza,"btn_actualizar_footer_ventana_actualizar_dato_cobranza","btn_actualizar_footer_ventana_actualizar_dato_cobranza","Actualizar")

                                //                 btn_actualizar_footer_ventana_actualizar_dato_cobranza.addEventListener("click",function () {
                                //                     let formData = new FormData()
                                //                     formData.append("date",date)
                                //                     formData.append("nombre_operador",nombre_operador)
                                //                     formData.append("columna",columna)
                                //                     formData.append("dato",in_dato.value)

                                //                     let peticion = new XMLHttpRequest()
                                //                     peticion.open("POST",url_)
                                //                     peticion.send(formData)
                                //                     peticion.onreadystatechange=function () {
                                //                         if (peticion.readyState==4&&peticion.status==200) {

                                //                             console.log(`date -> ${date}`)
                                //                             console.log(`nombre_operador -> ${nombre_operador}`)
                                //                             console.log(`columna -> ${columna}`)
                                //                             console.log(`dato -> ${in_dato.value}`)
                                //                             console.log(peticion.response)
                                //                             if (peticion.response==="success") {
                                //                                 hipercapa_cobranza.remove()
                                //                                 p_obj_col_elementos_crp_cont.innerHTML = in_dato.value
                                //                             }
                                //                         }
                                //                     }
                                //                 })

                                //             setTimeout(() => {
                                //                 document.addEventListener("mouseup",function (x) {
                                //                     if (ventana_actualizar_dato_cobranza&&!ventana_actualizar_dato_cobranza.contains(x.target)) {
                                //                          hipercapa_cobranza.remove()
                                //                      }
                                //                  }) 
                                //             }, 500);
                                            
                                                
                                // })
                            }
                            obj_elemento_crp_cont.setAttribute("info_data",fila_info[0]+" "+fila_info[1]+" "+fila_info[13])
                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                        }


                        //ordenar cobranza por fecha normal
                        divs = Array.from(divs)
                        divs.sort(function(a, b) {
                            let dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            let dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });
                        obj_crp_cont.innerHTML = ''
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                        // nota ordenar cobranza por fecha de venta


                        let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                            divs.sort(function(a, b) {
                                let dateA = new Date(a.querySelector('[cell_class=fecha_venta]').textContent)
                                // console.log(dateA)
                                let dateB = new Date(b.querySelector('[cell_class=fecha_venta]').textContent)
                                // console.log(dateB)
                                return dateA - dateB
                            });
                            obj_crp_cont.innerHTML = ''
                            divs.forEach(function(div) {
                                obj_crp_cont.appendChild(div)
                            });
                        })
                        // ?  let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        // ?  console.log(btn_ordenar_fecha_venta)
                        // ?  btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                        // ?      console.log(btn_ordenar_fecha_venta)
                        // ?      let arreglo_columna_fecha_venta = obj_crp_cont.querySelectorAll("[cell_class=fecha]")
                        // ?      console.log(obj_crp_cont)
                        // ?      console.log(arreglo_columna_fecha_venta)
                        // ?  })

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    array_in_column[0].setAttribute("type","date")
                                    array_in_column[1].setAttribute("type","text")
                                    array_in_column[2].setAttribute("type","text")
                                    array_in_column[3].setAttribute("type","number")
                                    array_in_column[4].setAttribute("type","number")
                                    array_in_column[5].setAttribute("type","number")
                                    array_in_column[6].setAttribute("type","number")
                                    // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                // console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    createTable()
                                                    setTimeout(calculateTabla,10000)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTabla() {
                for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS
                    let obj_cell_fila_datos = mkText(obj_fila_datos,cell_fila_datos_c,"cell_fila_datos_"+t.toLowerCase().replace(/[-\s]/g,"_")+"_"+columnas[j].toLowerCase()+"_"+j,"0")
                    let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)

                    let arr_int = []

                    let expresion_regular_num = /^[\-0-9]+$/

                    for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA

                        let temp_columna = array_obj_node[j_].getAttribute("cell_class")
                        let contenido_celda = array_obj_node[j_].innerHTML
                        // console.log(array_obj_node)
                        console.log(temp_columna)
                        //if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                            if (

                                temp_columna==="km_recorrido"||
                                temp_columna==="tarimas"||
                                temp_columna==="costo_flete_total"||
                                temp_columna==="costo_flete_interno"||
                                temp_columna==="costo_flete_externo"||
                                temp_columna==="pago_operador"||
                                temp_columna==="consumo_tag"||
                                temp_columna==="gastos_federal"||
                                temp_columna==="gastos_material"||
                                temp_columna==="gastos_monta_enlonada"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="recuperacion_tracto"||
                                temp_columna==="recuperacion_remolque"||
                                temp_columna==="costo_diesel"||
                                temp_columna==="utilidad_viaje"||
                                temp_columna==="utilidad_extra"
                                
                                ) 
                            {
                                let int_temp = contenido_celda===""?0:contenido_celda
                                console.log(int_temp)
                                arr_int.push(parseInt(int_temp))
                                let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)
                                obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                            }

                         else {
                            obj_cell_fila_datos.firstChild.innerHTML=array_obj_node.length
                        }
                    }
                    arr_all_elements_totales.push(parseInt(obj_cell_fila_datos.firstChild.innerHTML))
                }
        
                let check_fecha = arr_all_elements_totales[0];
                let check_origen = arr_all_elements_totales[1];
                let check_destino = arr_all_elements_totales[2];
                let check_existencia = arr_all_elements_totales[3];
                let check_carga = arr_all_elements_totales[4];
                let check_consumo = arr_all_elements_totales[5];
                let check_total = arr_all_elements_totales[6];
            
                if (check_total != (check_existencia + check_carga - check_consumo)) {
                    console.log(`%cError en la información de totales: ${t}`, "color:#f7983e;");
                }
            }
                        setTimeout(calculateTabla,1500)
                // actualizado [si] -
            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                    })
                }, 585);


            })





            let t_return = obj_t
            return {obj_temp,arr_all_elements_totales,t_return}
}

function mkPestañaTablaCobranzaDiariaCliente(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";

    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            // console.log(fecha_)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)

            let keys_columna = []

                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j].toLowerCase().replace(/[\s]/g,"_"),columnas[j])
                    keys_columna.push(columnas[j].toLowerCase().replace(/[\s]/g, "_"))
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                formData_.append("cliente",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);
                        // console.log(datos)

                        let divs = []
                        let divs_fecha_venta = []
                        let colores = ["##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd"]


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(datos[j])
                                // console.log([columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(obj_col_elementos_crp_cont)
                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))
                                p_obj_col_elementos_crp_cont.setAttribute("fecha",datos[j]["fecha"])
                                p_obj_col_elementos_crp_cont.setAttribute("date",new Date(datos[j]["fecha"]).toISOString())
                                p_obj_col_elementos_crp_cont.setAttribute("nombre_operador",datos[j]["nombre_operador"])
                                p_obj_col_elementos_crp_cont.setAttribute("columna",(columnas[j_].toLowerCase()).replace(/[\s]/g,"_"))

                                if (j_===0) {
                                    p_obj_col_elementos_crp_cont.style.background=colores[parseInt(p_obj_col_elementos_crp_cont.innerHTML.split("-").pop())]
                                }
                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                            }
                            obj_elemento_crp_cont.setAttribute("info_data",fila_info[0]+" "+fila_info[1]+" "+fila_info[13])
                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                        }


                        //ordenar cobranza por fecha normal
                        divs = Array.from(divs)
                        divs.sort(function(a, b) {
                            let dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            let dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });
                        obj_crp_cont.innerHTML = ''
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });
                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    array_in_column[0].setAttribute("type","date")
                                    array_in_column[1].setAttribute("type","text")
                                    array_in_column[2].setAttribute("type","text")
                                    array_in_column[3].setAttribute("type","number")
                                    array_in_column[4].setAttribute("type","number")
                                    array_in_column[5].setAttribute("type","number")
                                    array_in_column[6].setAttribute("type","number")
                                    // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                // console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    createTable()
                                                    setTimeout(calculateTabla,10000)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTabla() {
                for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS
                    let obj_cell_fila_datos = mkText(obj_fila_datos,cell_fila_datos_c,"cell_fila_datos_"+t.toLowerCase().replace(/[-\s]/g,"_")+"_"+columnas[j].toLowerCase()+"_"+j,"0")
                    let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)

                    let arr_int = []

                    let expresion_regular_num = /^[\-0-9]+$/

                    for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA

                        let temp_columna = array_obj_node[j_].getAttribute("cell_class")
                        let contenido_celda = array_obj_node[j_].innerHTML
                        // console.log(array_obj_node)
                        console.log(temp_columna)
                        //if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                            if (

                                temp_columna==="km_recorrido"||
                                temp_columna==="tarimas"||
                                temp_columna==="costo_flete_total"||
                                temp_columna==="costo_flete_interno"||
                                temp_columna==="costo_flete_externo"||
                                temp_columna==="pago_operador"||
                                temp_columna==="consumo_tag"||
                                temp_columna==="gastos_federal"||
                                temp_columna==="gastos_material"||
                                temp_columna==="gastos_monta_enlonada"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="recuperacion_tracto"||
                                temp_columna==="recuperacion_remolque"||
                                temp_columna==="costo_diesel"||
                                temp_columna==="utilidad_viaje"||
                                temp_columna==="utilidad_extra"
                                
                                ) 
                            {
                                let int_temp = contenido_celda===""?0:contenido_celda
                                console.log(int_temp)
                                arr_int.push(parseInt(int_temp))
                                let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)
                                obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                            }

                         else {
                            obj_cell_fila_datos.firstChild.innerHTML=array_obj_node.length
                        }
                    }
                    arr_all_elements_totales.push(parseInt(obj_cell_fila_datos.firstChild.innerHTML))
                }
        
                let check_fecha = arr_all_elements_totales[0];
                let check_origen = arr_all_elements_totales[1];
                let check_destino = arr_all_elements_totales[2];
                let check_existencia = arr_all_elements_totales[3];
                let check_carga = arr_all_elements_totales[4];
                let check_consumo = arr_all_elements_totales[5];
                let check_total = arr_all_elements_totales[6];
            
                if (check_total != (check_existencia + check_carga - check_consumo)) {
                    console.log(`%cError en la información de totales: ${t}`, "color:#f7983e;");
                }
            }
                        setTimeout(calculateTabla,1500)
                // actualizado [si] -
            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                    })
                }, 585);


            })





            let t_return = obj_t
            return {obj_temp,arr_all_elements_totales,t_return}
}

function mkPestañaTablaCobranzaDiariaUnidad(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";

    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            // console.log(fecha_)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)

            let keys_columna = []

                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j].toLowerCase().replace(/[\s]/g,"_"),columnas[j])
                    keys_columna.push(columnas[j].toLowerCase().replace(/[\s]/g, "_"))
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                // formData_.append("operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);
                        // console.log(datos)

                        let divs = []
                        let divs_fecha_venta = []
                        let colores = ["##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd"]


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(datos[j])
                                // console.log([columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(obj_col_elementos_crp_cont)
                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))
                                p_obj_col_elementos_crp_cont.setAttribute("fecha",datos[j]["fecha"])
                                p_obj_col_elementos_crp_cont.setAttribute("date",new Date(datos[j]["fecha"]).toISOString())
                                p_obj_col_elementos_crp_cont.setAttribute("nombre_operador",datos[j]["nombre_operador"])
                                p_obj_col_elementos_crp_cont.setAttribute("columna",(columnas[j_].toLowerCase()).replace(/[\s]/g,"_"))

                                if (j_===0) {
                                    p_obj_col_elementos_crp_cont.style.background=colores[parseInt(p_obj_col_elementos_crp_cont.innerHTML.split("-").pop())]
                                }

                                // datos[j]

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                            }
                            obj_elemento_crp_cont.setAttribute("info_data",fila_info[0]+" "+fila_info[1]+" "+fila_info[13])
                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                        }


                        //ordenar cobranza por fecha normal
                        divs = Array.from(divs)
                        divs.sort(function(a, b) {
                            let dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            let dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });
                        obj_crp_cont.innerHTML = ''
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                        // nota ordenar cobranza por fecha de venta


                        let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                            divs.sort(function(a, b) {
                                let dateA = new Date(a.querySelector('[cell_class=fecha_venta]').textContent)
                                // console.log(dateA)
                                let dateB = new Date(b.querySelector('[cell_class=fecha_venta]').textContent)
                                // console.log(dateB)
                                return dateA - dateB
                            });
                            obj_crp_cont.innerHTML = ''
                            divs.forEach(function(div) {
                                obj_crp_cont.appendChild(div)
                            });
                        })
                        // ?  let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        // ?  console.log(btn_ordenar_fecha_venta)
                        // ?  btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                        // ?      console.log(btn_ordenar_fecha_venta)
                        // ?      let arreglo_columna_fecha_venta = obj_crp_cont.querySelectorAll("[cell_class=fecha]")
                        // ?      console.log(obj_crp_cont)
                        // ?      console.log(arreglo_columna_fecha_venta)
                        // ?  })

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    array_in_column[0].setAttribute("type","date")
                                    array_in_column[1].setAttribute("type","text")
                                    array_in_column[2].setAttribute("type","text")
                                    array_in_column[3].setAttribute("type","number")
                                    array_in_column[4].setAttribute("type","number")
                                    array_in_column[5].setAttribute("type","number")
                                    array_in_column[6].setAttribute("type","number")
                                    // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                // console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    createTable()
                                                    setTimeout(calculateTabla,10000)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTabla() {
                for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS
                    let obj_cell_fila_datos = mkText(obj_fila_datos,cell_fila_datos_c,"cell_fila_datos_"+t.toLowerCase().replace(/[-\s]/g,"_")+"_"+columnas[j].toLowerCase()+"_"+j,"0")
                    let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)

                    let arr_int = []

                    let expresion_regular_num = /^[\-0-9]+$/

                    for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA

                        let temp_columna = array_obj_node[j_].getAttribute("cell_class")
                        let contenido_celda = array_obj_node[j_].innerHTML
                        // console.log(array_obj_node)
                        console.log(temp_columna)
                        //if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                            if (

                                temp_columna==="km_recorrido"||
                                temp_columna==="tarimas"||
                                temp_columna==="costo_flete_total"||
                                temp_columna==="costo_flete_interno"||
                                temp_columna==="costo_flete_externo"||
                                temp_columna==="pago_operador"||
                                temp_columna==="consumo_tag"||
                                temp_columna==="gastos_federal"||
                                temp_columna==="gastos_material"||
                                temp_columna==="gastos_monta_enlonada"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="recuperacion_tracto"||
                                temp_columna==="recuperacion_remolque"||
                                temp_columna==="costo_diesel"||
                                temp_columna==="utilidad_viaje"||
                                temp_columna==="utilidad_extra"
                                
                                ) 
                            {
                                let int_temp = contenido_celda===""?0:contenido_celda
                                console.log(int_temp)
                                arr_int.push(parseInt(int_temp))
                                let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)
                                obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                            }

                         else {
                            obj_cell_fila_datos.firstChild.innerHTML=array_obj_node.length
                        }
                    }
                    arr_all_elements_totales.push(parseInt(obj_cell_fila_datos.firstChild.innerHTML))
                }
        
                let check_fecha = arr_all_elements_totales[0];
                let check_origen = arr_all_elements_totales[1];
                let check_destino = arr_all_elements_totales[2];
                let check_existencia = arr_all_elements_totales[3];
                let check_carga = arr_all_elements_totales[4];
                let check_consumo = arr_all_elements_totales[5];
                let check_total = arr_all_elements_totales[6];
            
                if (check_total != (check_existencia + check_carga - check_consumo)) {
                    console.log(`%cError en la información de totales: ${t}`, "color:#f7983e;");
                }
            }
                        setTimeout(calculateTabla,1500)
                // actualizado [si] -
            obj_btn_img_converter.addEventListener("mouseup",function() {
                obj_temp.scrollIntoView({behavior:"smooth"})
                // n.scrollBy(0, -55);
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                    })
                }, 585);


            })

            let t_return = obj_t
            return {obj_temp,arr_all_elements_totales,t_return}
}

function mkPestañaTablaCobranzaDiariaOperador(n,c,i,t,f,url,url_,url__,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
    n?n:n="";c?c:c="";i?i:i="";t?t:t="";f?f:f="";

    ///PANEL
    c==""?panel_c="":panel_c="panel_"+c
    i==""?panel_i="":panel_i="panel_"+i
        //HEADER
        c==""?h_c="":h_c="header_"+c
        i==""?h_i="":h_i="header_"+i
            //TITULO
            c==""?t_c="":t_c="titulo_"+c
            i==""?t_i="":t_i="titulo_"+i
        //CUERPO
        c==""?crp_c="":crp_c="cuerpo_"+c
        i==""?crp_i="":crp_i="cuerpo_"+i
            //HEADER CUERPO
            c==""?h_crp_c="":h_crp_c="titulo_contenido_"+c
            i==""?h_crp_i="":h_crp_i="titulo_contenido_"+i
                //COLUMNA CUERPO
                c==""?col_h_crp_c="":col_h_crp_c="columna_header_"+c
                i==""?col_h_crp_i="":col_h_crp_i="columna_header_"+i
            //CUERPO CONTENIDO
            c==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+c
            i==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+i
                //CONTENEDOR ELEMENTOS
                c==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+c
                i==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+i
                    //ELEMENTO CUERPO CONTENIDO
                    c==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+c
                    i==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+i
                        //COLUMNA ELEMENTO CUERPO CONTENIDO
                        c==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+c
                        i==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+i

        //FILA DATOS
        c==""?fila_datos_c="":fila_datos_c="fila_datos_"+c
        i==""?fila_datos_i="":fila_datos_i="fila_datos_"+i
            //CELDA FILA DATOS
            c==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+c
            i==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+i

        //FOOTER
        c==""?foo_c="":foo_c="footer_"+c
        i==""?foo_i="":foo_i="footer_"+i
            //DESCRIPCION FOOTER
            c==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+c
            i==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+i
            //BOTON ADD
            c==""?btn_add_c="":btn_add_c="btn_add_"+c
            i==""?btn_add_i="":btn_add_i="btn_add_"+i
                //VENTANA ADD
                c==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+c
                i==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+i
                    //VENTANA ADD
                    c==""?vnt_add_c="":vnt_add_c="ventana_add_"+c
                    i==""?vnt_add_i="":vnt_add_i="ventana_add_"+i
                        //CUERPO VENTANA ADD
                        c==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+c
                        i==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+i
                        //FOOTER VENTANA ADD
                        c==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+c
                        i==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+i
                            //BUTTON ENVIAR FORMULARIO
                            c==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+c
                            i==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+i
                            //BUTTON CERRAR FORMULARIO
                            c==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+c
                            i==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+i

    ////// FILTRO DIAS
    let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
    let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let d, m, y
    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    if (f && (Date.parse(f) && expresion_regular_1_invert.test(f) || expresion_regular_2_invert.test(f))) {
        if (expresion_regular_1_invert.test(f)) {
            [y, m, d] = f.split("-").map(Number);
            }
        if (expresion_regular_2_invert.test(f)) {
            [y, m, d] = f.split("/").map(Number);
        }
    }

    if (f && (Date.parse(f) && expresion_regular_1.test(f) || expresion_regular_2.test(f))) {
        if (expresion_regular_1.test(f)) {
        [d, m, y] = f.split("-").map(Number);
        }
        if (expresion_regular_2.test(f)) {
        [d, m, y] = f.split("/").map(Number);
        }
    }

    fecha_ = new Date(y, m - 1, d)
    fecha_.setUTCHours(0, 0, 0, 0)
    fecha_ = fecha_.toISOString()

    let obj_temp = mkObj(n,panel_c,panel_i)
        obj_temp.setAttribute("id_panel",t.toLowerCase().replace(/[-\s]/g,"_"))
        let obj_h = mkObj(obj_temp,h_c,h_i)
            let obj_t = mkText(obj_h,t_c,t_i,t)
            // console.log(fecha_)
            let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+i,"PNG")

        let obj_crp = mkObj(obj_temp,crp_c,crp_i)

            let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)

            let keys_columna = []

                //CREAR TITULO DE COLUMNAS
                for (let j = 0; j < columnas.length; j++) {
                    let obj_col_h_crp = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j].toLowerCase().replace(/[\s]/g,"_"),columnas[j])
                    keys_columna.push(columnas[j].toLowerCase().replace(/[\s]/g, "_"))
                }
            let obj_crp_cont = mkObj(obj_crp,crp_cont_c,crp_cont_i)
            createTable()
            function createTable() {
                let formData_ = new FormData()
                formData_.append("fecha",fecha_)
                // formData_.append("operador",t.toLowerCase())
                let peticion_elemento = new XMLHttpRequest()
                peticion_elemento.open("POST",url)
                peticion_elemento.send(formData_)
                peticion_elemento.onreadystatechange=function() {
                    if (peticion_elemento.readyState==4&&peticion_elemento.status==200) { // filas tabla ACTUALIZADO 01/08/2023
                        let res_peticion_elemento = peticion_elemento.response
                            res_peticion_elemento = res_peticion_elemento.replace(/ 00:00:00/g,"")
                            console.log(res_peticion_elemento)
                        let datos = JSON.parse(res_peticion_elemento);
                        // console.log(datos)

                        let divs = []
                        let divs_fecha_venta = []
                        let colores = ["##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd","##8bcb6e","#B2C26A","#98FB98","#40E0D0","#ff76df","#e37878","#00FFFF","#4284bd"]


                        for (let j = 0; j < datos.length; j++) {
                            let obj_elemento_crp_cont = mkObj(obj_crp_cont,element_crp_cont_c,"elemento_cuerpo_contenido_"+t.toLowerCase().replace(/[\s-]/g,"_")+j/*,element_crp_cont_i+"_"+j error de id*/)
                            divs.push(obj_elemento_crp_cont)
                            let fila_info = []

                            // console.log(obj_elemento_crp_cont)
                            for (let j_ = 0; j_ < columnas.length; j_++) {
                                let obj_col_elementos_crp_cont = mkText(obj_elemento_crp_cont,"p_"+col_elementos_crp_cont_c,"p_columna_elemento_cuerpo_contenido_"+columnas[j_]+"_row_"+j+"_column_"+j_,datos[j][columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(datos[j])
                                // console.log([columnas[j_].toLowerCase().replace(/[\s]/g,"_")])
                                // console.log(obj_col_elementos_crp_cont)
                                let p_obj_col_elementos_crp_cont = obj_col_elementos_crp_cont.firstChild
                                p_obj_col_elementos_crp_cont.setAttribute("cell_class",columnas[j_].toLowerCase().replace(/[\s]/g,"_"))
                                p_obj_col_elementos_crp_cont.setAttribute("fecha",datos[j]["fecha"])
                                p_obj_col_elementos_crp_cont.setAttribute("date",new Date(datos[j]["fecha"]).toISOString())
                                p_obj_col_elementos_crp_cont.setAttribute("nombre_operador",datos[j]["nombre_operador"])
                                p_obj_col_elementos_crp_cont.setAttribute("columna",(columnas[j_].toLowerCase()).replace(/[\s]/g,"_"))

                                if (j_===0) {
                                    p_obj_col_elementos_crp_cont.style.background=colores[parseInt(p_obj_col_elementos_crp_cont.innerHTML.split("-").pop())]
                                }

                                // datos[j]

                                fila_info.push(obj_col_elementos_crp_cont.firstChild.innerHTML)
                            }
                            obj_elemento_crp_cont.setAttribute("info_data",fila_info[0]+" "+fila_info[1]+" "+fila_info[13])
                            let contenido_p_elementos = obj_elemento_crp_cont.querySelectorAll("p")
                        }


                        //ordenar cobranza por fecha normal
                        divs = Array.from(divs)
                        divs.sort(function(a, b) {
                            let dateA = new Date(a.querySelector('[cell_class=fecha]').textContent)
                            let dateB = new Date(b.querySelector('[cell_class=fecha]').textContent)
                            return dateA - dateB
                        });
                        obj_crp_cont.innerHTML = ''
                        divs.forEach(function(div) {
                            obj_crp_cont.appendChild(div)
                        });

                        // nota ordenar cobranza por fecha de venta


                        let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                            divs.sort(function(a, b) {
                                let dateA = new Date(a.querySelector('[cell_class=fecha_venta]').textContent)
                                // console.log(dateA)
                                let dateB = new Date(b.querySelector('[cell_class=fecha_venta]').textContent)
                                // console.log(dateB)
                                return dateA - dateB
                            });
                            obj_crp_cont.innerHTML = ''
                            divs.forEach(function(div) {
                                obj_crp_cont.appendChild(div)
                            });
                        })
                        // ?  let btn_ordenar_fecha_venta = document.getElementById("cont_p_columna_header_tablaCobranza_viajes_semana_fecha_venta")
                        // ?  console.log(btn_ordenar_fecha_venta)
                        // ?  btn_ordenar_fecha_venta.addEventListener("mouseup",function () {
                        // ?      console.log(btn_ordenar_fecha_venta)
                        // ?      let arreglo_columna_fecha_venta = obj_crp_cont.querySelectorAll("[cell_class=fecha]")
                        // ?      console.log(obj_crp_cont)
                        // ?      console.log(arreglo_columna_fecha_venta)
                        // ?  })

                    }
                }
            }

            /// FOOTER PANEL
            let obj_foo = mkObj(obj_temp,foo_c,foo_i)
                let obj_descripcion_footer = mkText(obj_foo,desc_foo_c,desc_foo_i,"Fecha Inicio: "+f)
                let btn_add = mkObj(obj_foo,btn_add_c,btn_add_i,"+")

            let obj_fila_datos = mkObj(obj_temp,fila_datos_c,fila_datos_i)


                btn_add.addEventListener("click",function(x) {
                    let cont_ventana_add_elemento = mkObj(obj_temp,cont_vnt_add_c,cont_vnt_add_i)
                        let ventana_add_elemento = mkObj(cont_ventana_add_elemento,vnt_add_c,vnt_add_i)
                            let cuerpo_ventana_add_elemento = mkObj(ventana_add_elemento,crp_vnt_add_c,crp_vnt_add_i)
                                for (let j = 0; j < columnas.length; j++) {
                                    let obj_input = mkObjInput(cuerpo_ventana_add_elemento,"add_elemento","add_elemento_"+columnas[j],"text",columnas[j],"~")
                                }

                                let footer_ventana_add_elemento = mkObj(ventana_add_elemento,foo_vnt_add_c,foo_vnt_add_i)
                                    let button_enviar = mkObjButton(footer_ventana_add_elemento,btn_env_form_c,btn_env_form_i,"Agregar")
                                    let button_cerrar = mkObjButton(footer_ventana_add_elemento,btn_crr_form_c,btn_crr_form_i,"~")

                                    let array_in_column = cuerpo_ventana_add_elemento.querySelectorAll("input")
                                    array_in_column[0].setAttribute("type","date")
                                    array_in_column[1].setAttribute("type","text")
                                    array_in_column[2].setAttribute("type","text")
                                    array_in_column[3].setAttribute("type","number")
                                    array_in_column[4].setAttribute("type","number")
                                    array_in_column[5].setAttribute("type","number")
                                    array_in_column[6].setAttribute("type","number")
                                    // // console.log(array_in_column)
                                    button_enviar.addEventListener("click",function () {
                                        let formData_addElemento = new FormData()
                                            formData_addElemento.append("nombre_operador",t.toLowerCase())
                                            for (let j = 0; j < columnas.length; j++) {
                                                columnas[j] = columnas[j].replace(/\s/,"_").toLowerCase()
                                                // // console.log(columnas[j])
                                                formData_addElemento.append(`${columnas[j]}`,array_in_column[j].value)
                                                // // console.log(array_in_column[j].value)
                                            }
                                        let peticion_addElemeto = new XMLHttpRequest()
                                        peticion_addElemeto.open("POST",url__)
                                        peticion_addElemeto.send(formData_addElemento)
                                        peticion_addElemeto.onreadystatechange=function () {
                                            if (peticion_addElemeto.readyState==4&&peticion_addElemeto.status==200) {
                                                let res_peticion_addElemeto = peticion_addElemeto.response
                                                // console.log(res_peticion_addElemeto)
                                                if (res_peticion_addElemeto==="succes") {
                                                    obj_crp_cont.innerHTML=""
                                                    obj_fila_datos.innerHTML=""
                                                    cont_ventana_add_elemento.remove()
                                                    createTable()
                                                    setTimeout(calculateTabla,10000)
                                                }
                                            }
                                        }
                                    })
                                    button_cerrar.addEventListener("click",function () {
                                        cont_ventana_add_elemento.remove()
                                    })
                                    document.addEventListener("keydown",function(x){if (x.keyCode===27) {cont_ventana_add_elemento.remove()}})
                                    document.addEventListener("input",function (x) {
                                        if (array_in_column[3].contains(x.target)||array_in_column[4].contains(x.target)||array_in_column[5].contains(x.target)||array_in_column[6].contains(x.target)) {
                                            array_in_column[6].value = parseInt(array_in_column[3].value)+parseInt(array_in_column[4].value)-array_in_column[5].value
                                        }
                                    })
                    })

            let arr_all_elements_totales = []

            function calculateTabla() {
                for (let j = 0; j < columnas.length; j++) { // CREAR CELDAS
                    let obj_cell_fila_datos = mkText(obj_fila_datos,cell_fila_datos_c,"cell_fila_datos_"+t.toLowerCase().replace(/[-\s]/g,"_")+"_"+columnas[j].toLowerCase()+"_"+j,"0")
                    let array_obj_node = obj_crp_cont.querySelectorAll(`[cell_class=${columnas[j].toLowerCase().replace(/[\s]/g,"_")}]`)

                    let arr_int = []

                    let expresion_regular_num = /^[\-0-9]+$/

                    for (let j_ = 0; j_ < array_obj_node.length; j_++) { // CALCULAR EN CONTENIDO DE CADA CELDA

                        let temp_columna = array_obj_node[j_].getAttribute("cell_class")
                        let contenido_celda = array_obj_node[j_].innerHTML
                        // console.log(array_obj_node)
                        console.log(temp_columna)
                        //if (expresion_regular_num.test(array_obj_node[j_].innerHTML)) {

                            if (

                                temp_columna==="km_recorrido"||
                                temp_columna==="tarimas"||
                                temp_columna==="costo_flete_total"||
                                temp_columna==="costo_flete_interno"||
                                temp_columna==="costo_flete_externo"||
                                temp_columna==="pago_operador"||
                                temp_columna==="consumo_tag"||
                                temp_columna==="gastos_federal"||
                                temp_columna==="gastos_material"||
                                temp_columna==="gastos_monta_enlonada"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="gastos_otros"||
                                temp_columna==="gastos_variables_tracto"||
                                temp_columna==="gastos_variables_remolque"||
                                temp_columna==="recuperacion_tracto"||
                                temp_columna==="recuperacion_remolque"||
                                temp_columna==="costo_diesel"||
                                temp_columna==="utilidad_viaje"||
                                temp_columna==="utilidad_extra"
                                
                                ) 
                            {
                                let int_temp = contenido_celda===""?0:contenido_celda
                                console.log(int_temp)
                                arr_int.push(parseInt(int_temp))
                                let sum_arr_int = arr_int.reduce((acumulardor,elemento) => acumulardor + elemento, 0)
                                obj_cell_fila_datos.firstChild.innerHTML=sum_arr_int
                            }

                         else {
                            obj_cell_fila_datos.firstChild.innerHTML=array_obj_node.length
                        }
                    }
                    arr_all_elements_totales.push(parseInt(obj_cell_fila_datos.firstChild.innerHTML))
                }
        
                let check_fecha = arr_all_elements_totales[0];
                let check_origen = arr_all_elements_totales[1];
                let check_destino = arr_all_elements_totales[2];
                let check_existencia = arr_all_elements_totales[3];
                let check_carga = arr_all_elements_totales[4];
                let check_consumo = arr_all_elements_totales[5];
                let check_total = arr_all_elements_totales[6];
            
                if (check_total != (check_existencia + check_carga - check_consumo)) {
                    console.log(`%cError en la información de totales: ${t}`, "color:#f7983e;");
                }
            }
                        setTimeout(calculateTabla,1500)
            obj_btn_img_converter.addEventListener("mouseup",function() {
                setTimeout(() => {
                    html2canvas(obj_temp).then(function (canvas) {
                        let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                            body.style.position="relative"
                            cont_img_table.style.position="absolute"
                            cont_img_table.scrollIntoView()

                            let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table");stylerFlexDirection(ventana_img_table,"column");

                                let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+i)
                                    let btn_cerrar_img_table = mkObj(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","x")
                                    btn_cerrar_img_table.addEventListener("mouseup",function () {
                                        cont_img_table.remove()
                                    })

                                let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+i)
                                    let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())

                    })
                }, 585);


            })





            let t_return = obj_t
            return {obj_temp,arr_all_elements_totales,t_return}
}

function insertInSpan(obj, color) {
    return `<span style="color: ${color};">${obj}</span>`;
}

function mkAlert(texto,color) {
    let body = document.body
    body.style.position="relative"
    console.log(texto)

    let a_text = texto.split("\s")
    // console.log(a_text)
    
    let obj_temp = mkObj(document.body,"h_cap","h_cap_"+a_text[0]);obj_temp.style.position="absolute";obj_temp.style.zIndex=3
    console.log(obj_temp)

    let pestaña_alert = mkObj(obj_temp,"pestaña_alert","pestaña_alert")

    let contenedor_alerta = mkText(pestaña_alert,"alerta","alerta",texto)
        let p_alerta = contenedor_alerta.querySelector("p")

    p_alerta.style.color = color
    p_alerta.style.border = "2px solid "+color


        obj_temp.addEventListener("click",function () {
            obj_temp.remove()
        })

    return obj_temp
}


// ACTUALIZADO EN -> mkDomer/controlador/bibliotecaPruevas.js
// gest //FOR//FOR//FOR//FOR//FOR///////////// 

// gest .s5ssSs.  .s5SSSs.  .s5SSSSs. .s    s.  .s5SSSs.  .s5SSSs.  .s5SSSs. .s5SSSs.  .s5SSSs.  .s    s.  .s5SSSs.  .s5SSSs.
// gest    SS SS.       SS.    SSS          SS.       SS.       SS.                SS.       SS.       SS.       SS.       SS. .s    s.  s.  .s    s.
// gest sS SS S%S sS    S%S    S%S    sS    S%S sS    `:; sS    S%S sS       sS    S%S sS    `:; sS    S%S sS    `:; sS    S%S       SS. SS.       SS.
// gest SS :; S%S SS    S%S    S%S    SS    S%S SS        SS    S%S SS       SS    S%S SS        SS    S%S SS        SS    S%S sS    S%S S%S sSs.  S%S
// gest SS    S%S SS    S%S    S%S    SSSs. S%S SSSs.     SS .sS;:' SSSs.    SS    S%S SS        SSSSs.S:' SSSs.     SS .sS;:' SSSSs.S:' S%S SS `S.S%S
// gest SS    S%S SS    S%S    S%S    SS    S%S SS        SS    ;,  SS       SS    S%S SS        SS  "SS.  SS        SS    ;,  SS  "SS.  S%S SS  `sS%S
// gest SS    `:; SS    `:;    `:;    SS    `:; SS        SS    `:; SS       SS    `:; SS        SS    `:; SS        SS    `:; SS    `:; `:; SS    `:;
// gest SS    ;,. SS    ;,.    ;,.    SS    ;,. SS    ;,. SS    ;,. SS       SS    ;,. SS    ;,. SS    ;,. SS    ;,. SS    ;,. SS    ;,. ;,. SS    ;,.
// gest :;    ;:' `:;;;;;:'    ;:'    :;    ;:' `:;;;;;:' `:    ;:' :;       `:;;;;;:' `:;;;;;:' :;    ;:' `:;;;;;:' `:    ;:' :;    ;:' ;:' :;    ;:'

// gest /////////////// 

// ? [STYLER] // ? [STYLER] // ? [STYLER] 
// ? [STYLER] // ? [STYLER] // ? [STYLER] // ? [STYLER] // ? [STYLER] // ? [STYLER] // ? [STYLER] 

// ? /::::::::  ::::::::::: :::   ::: :::        :::::::::: ::::::::\
// ? :+:    :+:     :+:     :+:   :+: :+:        :+:        :+:    :+:
// ? +:+            +:+      +:+ +:+  +:+        +:+        +:+    +:+
// ? +#++:++#++     +#+       +#++:   +#+        +#++:++#   +#++:++#:
// ?        +#+     +#+        +#+    +#+        +#+        +#+    +#+
// ? #+#    #+#     #+#        #+#    #+#        #+#        #+#    #+#
 // ? ########      ###        ###    ########## ########## ###    ###

// ? [STYLER] // ? [STYLER] // ? [STYLER] // ? [STYLER] // ? [STYLER] // ? [STYLER] // ? [STYLER] 

// gest // gest // gest // gest // gest 

// gest //////////////////////////////////////////////////////////////////
// gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest 


function stylerColor(element,color) {
    element.style.color=color
    // console.log(element)
    return element
}

function stylerFontFamily(element,font) {
    element.style.fontFamily=font
    // console.log(element)
    return element
}

function stylerFontSize(element,size) {
    element.style.fontSize=size
    // console.log(element)
    return element
}

function stylerPadding(element,padding) {
    element.style.padding=padding
    // console.log(element)
    return element
}

function stylerFlexDirection(element,direction) {
    element.style.flexDirection=direction
    // console.log(element)
    return element
}

function stylerWidth(element,width) {
    element.style.width=width
    // console.log(element)
    return element
}

function stylerHeight(element,height) {
    element.style.height=height
    console.log(element)
    return element
}

function stylerUserSelect(element,userSelect) {
    element.style.userSelect=userSelect   
    // console.log(element)
    return element
}

function stylerAlingItems(element,alignItems) {
    element.style.alignItems=alignItems
    // console.log(element)
    return element
}

function stylerJustifyContent(element,justifyContent) {
    element.style.justifyContent=justifyContent
    // console.log(element)
    return element
}

function stylerCursor(element,cursor) {
    element.style.cursor=cursor
    // console.log(element)
    return element
}

function stylerBackground(element,background) {
    element.style.background=background
    // console.log(element)
    return element
}

function stylerWordWrap(element,wordWrap) {
    element.style.wordWrap=wordWrap
    // console.log(element)
    return element
}

function stylerMaxWidth(element,maxWidth) {
    element.style.maxWidth = maxWidth
    // console.log(element)
    return element
}
// actualizado [si] -> pasar a styler
function stylerPosition(element,position) {
    element.style.position = position
    return element
}

function stylerzIndex(element,zIndex) {
    element.style.zIndex=zIndex
    return element
}

// gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest 


    function mkTextList(n,c,i,...inner) {
        n = n || "";c = c || "";i = i || "";inner = inner || "";c==""?c_c="":c_c="cont_"+c;i==""?c_i="":c_i="cont_"+i;
        
        let obj_temp = div(c_c,c_i)
        n.appendChild(obj_temp)
    
        let p_temp = document.createElement("p")
        p_temp.setAttribute("class",c)
        p_temp.setAttribute("id",i)
        for (let j = 0; j < inner.length; j++) {
            let element = inner[j];
            // ! console.log(element)
            let sub_text = mkText(obj_temp,"sub_text_"+c,"sub_text_"+i+"_"+j,element)
            // ! console.log(sub_text)
                
        }
        return obj_temp
    }
    function mkTabla(nodo,clase,id,titulo_tabla,fecha_tabla,url_peticion_solicitar_fila,...columnas) { //NODO, CLASE, ID, TITULO PANEL, FOOTER FANEL
        nodo?nodo:nodo=""
        clase?clase:clase=""
        id?id:id=""
        titulo_tabla?titulo_tabla:titulo_tabla=""
        fecha_tabla?fecha_tabla:fecha_tabla=""
        clase==""?panel_c="":panel_c="panel_"+clase
        id==""?panel_i="":panel_i="panel_"+id
        clase==""?h_c="":h_c="header_"+clase
        id==""?h_i="":h_i="header_"+id
        clase==""?t_c="":t_c="titulo_"+clase
        id==""?t_i="":t_i="titulo_"+id
        clase==""?crp_c="":crp_c="cuerpo_"+clase
        id==""?crp_i="":crp_i="cuerpo_"+id
        clase==""?h_crp_c="":h_crp_c="titulo_contenido_"+clase
        id==""?h_crp_i="":h_crp_i="titulo_contenido_"+id
        clase==""?col_h_crp_c="":col_h_crp_c="columna_header_"+clase
        id==""?col_h_crp_i="":col_h_crp_i="columna_header_"+id
        clase==""?crp_cont_c="":crp_cont_c="cuerpo_contenido_"+clase
        id==""?crp_cont_i="":crp_cont_i="cuerpo_contenido_"+id
        clase==""?cont_elementos_c="":cont_elementos_c="cont_elementos_"+clase
        id==""?cont_elementos_i="":cont_elementos_i="cont_elementos_"+id
        clase==""?element_crp_cont_c="":element_crp_cont_c="elemento_cuerpo_contenido_"+clase
        id==""?element_crp_cont_i="":element_crp_cont_i="elemento_cuerpo_contenido_"+id
        clase==""?col_elementos_crp_cont_c="":col_elementos_crp_cont_c="columna_elemento_cuerpo_contenido_"+clase
        id==""?col_elementos_crp_cont_i="":col_elementos_crp_cont_i="columna_elemento_cuerpo_contenido_"+id
    
            //FILA DATOS
            clase==""?fila_datos_c="":fila_datos_c="fila_datos_"+clase
            id==""?fila_datos_i="":fila_datos_i="fila_datos_"+id
                //CELDA FILA DATOS
                clase==""?cell_fila_datos_c="":cell_fila_datos_c="cell_fila_datos_"+clase
                id==""?cell_fila_datos_i="":cell_fila_datos_i="cell_fila_datos_"+id
    
            //FOOTER
            clase==""?foo_c="":foo_c="footer_"+clase
            id==""?foo_i="":foo_i="footer_"+id
                //DESCRIPCION FOOTER
                clase==""?desc_foo_c="":desc_foo_c="descripcion_footer_"+clase
                id==""?desc_foo_i="":desc_foo_i="descripcion_footer_"+id
                //BOTON ADD
                clase==""?btn_add_c="":btn_add_c="btn_add_"+clase
                id==""?btn_add_i="":btn_add_i="btn_add_"+id
                    //VENTANA ADD
                    clase==""?cont_vnt_add_c="":cont_vnt_add_c="cont_ventana_add_"+clase
                    id==""?cont_vnt_add_i="":cont_vnt_add_i="cont_ventana_add_"+id
                        //VENTANA ADD
                        clase==""?vnt_add_c="":vnt_add_c="ventana_add_"+clase
                        id==""?vnt_add_i="":vnt_add_i="ventana_add_"+id
                            //CUERPO VENTANA ADD
                            clase==""?crp_vnt_add_c="":crp_vnt_add_c="cuerpo_ventana_add_"+clase
                            id==""?crp_vnt_add_i="":crp_vnt_add_i="cuerpo_ventana_add_"+id
                            //FOOTER VENTANA ADD
                            clase==""?foo_vnt_add_c="":foo_vnt_add_c="footer_ventana_add_"+clase
                            id==""?foo_vnt_add_i="":foo_vnt_add_i="footer_ventana_add_"+id
                                //BUTTON ENVIAR FORMULARIO
                                clase==""?btn_env_form_c="":btn_env_form_c="btn_enviar_forumalrio_ventana_add_"+clase
                                id==""?btn_env_form_i="":btn_env_form_i="btn_enviar_forumalrio_ventana_add_"+id
                                //BUTTON CERRAR FORMULARIO
                                clase==""?btn_crr_form_c="":btn_crr_form_c="btn_cerrar_forumalrio_ventana_add_"+clase
                                id==""?btn_crr_form_i="":btn_crr_form_i="btn_cerrar_forumalrio_ventana_add_"+id
    
        ////// FILTRO DIAS
        let expresion_regular_1_invert = /^\d{4}-\d{2}-\d{2}$/;
        let expresion_regular_2_invert = /^\d{4}\/\d{2}\/\d{2}$/;
        let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
        let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
        let d, m, y
        let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000
    
        if (fecha_tabla && (Date.parse(fecha_tabla) && expresion_regular_1_invert.test(fecha_tabla) || expresion_regular_2_invert.test(fecha_tabla))) {
            if (expresion_regular_1_invert.test(fecha_tabla)) {
                [y, m, d] = fecha_tabla.split("-").map(Number);
                }
            if (expresion_regular_2_invert.test(fecha_tabla)) {
                [y, m, d] = fecha_tabla.split("/").map(Number);
            }
        }
    
        if (fecha_tabla && (Date.parse(fecha_tabla) && expresion_regular_1.test(fecha_tabla) || expresion_regular_2.test(fecha_tabla))) {
            if (expresion_regular_1.test(fecha_tabla)) {
            [d, m, y] = fecha_tabla.split("-").map(Number);
            }
            if (expresion_regular_2.test(fecha_tabla)) {
            [d, m, y] = fecha_tabla.split("/").map(Number);
            }
        }
    
        fecha_ = new Date(y, m - 1, d)
        fecha_.setUTCHours(0, 0, 0, 0)
        fecha_ = fecha_.toISOString()
        // // console.log(fecha_)
    
        let obj_temp = mkObj(nodo,panel_c,panel_i)
            obj_temp.setAttribute("id_panel",titulo_tabla.toLowerCase().replace(/[-\s]/g,"_"))
            let obj_h = mkObj(obj_temp,h_c,h_i)
                let obj_t = mkText(obj_h,t_c,t_i,titulo_tabla)
                let obj_btn_img_converter = mkObj(obj_h,"obj_btn_img_converter","obj_btn_img_converter_"+id,"Conversión de formatos a .png")
    
    
            let obj_crp = mkObj(obj_temp,crp_c,crp_i)
    
                let obj_h_crp = mkObj(obj_crp,h_crp_c,h_crp_i)
                    //CREAR TITULO DE COLUMNAS
                    for (let j = 0; j < columnas.length; j++) {
                        let celda_header = mkText(obj_h_crp,"p_"+col_h_crp_c,"p_"+col_h_crp_i+"_"+columnas[j],columnas[j])
                    }
                let cuerpo_tabla = mkObj(obj_crp,crp_cont_c,crp_cont_i)
    
                let texto_tabla = mkTextList(cuerpo_tabla,"texto_tabla","texto_tabla",
                    "Realiza análisis detallados de los reportes.",
                    "Genera gráficos y visualizaciones para facilitar la interpretación de datos.",
                    "Implementa medidas de seguridad para proteger la información confidencial.",
                    "Automatiza la generación y envío de reportes periódicos.",
                    "Facilita la colaboración permitiendo el acceso a usuarios autorizados.",
                    "Ofrece funcionalidades de exportación e importación de datos para una mayor flexibilidad.",
                    "Permite la personalización de informes según las necesidades del usuario.",
                )
    
                    obj_btn_img_converter.addEventListener("mouseup",function() {
                    setTimeout(() => {
                        html2canvas(obj_temp).then(function (canvas) {
                            let cont_img_table = mkObj(body,"cont_img_table","cont_img_table"/*,'<img src="' + canvas.toDataURL() + '" />'*/)
                                body.style.position="relative"
                                cont_img_table.style.position="absolute"
                                cont_img_table.scrollIntoView()
    
                                let ventana_img_table = mkObj(cont_img_table,"ventana_img_table","ventana_img_table")
                                ventana_img_table.style.flexDirection="column"
    
                                    let header_img_table = mkObj(ventana_img_table,"header_img_table","header_img_table_"+id)
                                        let btn_cerrar_img_table = mkObjImg(header_img_table,"btn_cerrar_img_table","btn_cerrar_img_table","./vista/img/close.png")
                                        btn_cerrar_img_table.addEventListener("mouseup",function () {
                                            cont_img_table.remove()
                                        })
    
                                    let cuerpo_img_table = mkObj(ventana_img_table,"cuerpo_img_table","cuerpo_img_table_"+id)
                                        let img_table = mkObjImg(cuerpo_img_table,"img_table","img_table",canvas.toDataURL())
    
                        })
                    }, 585);
    
    
                })
    
    
                return obj_temp
    }
    

function mkAgenda(nodo, clase, id, titulo, fecha, ...filas) { // nodo clase id titulo fecha filas
    nodo = nodo || "";
    clase = clase || "";
    id = id || "";
    titulo = titulo || "";
    fecha = fecha || "";
    filas = filas || [];

    let days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/;
    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/;
    let fecha_;
    let dia_;
    let dias_transcurridos;
    let lunes;

    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000

    let dates = []

    if (fecha && (Date.parse(fecha) || expresion_regular_1.test(fecha) || expresion_regular_2.test(fecha))) {
        if (expresion_regular_1.test(fecha)) {
        let [d, m, y] = fecha.split("-").map(Number);
        fecha_ = new Date(y, m - 1, d);
        } else if (expresion_regular_2.test(fecha)) {
        let [d, m, y] = fecha.split("/").map(Number);
        fecha_ = new Date(y, m - 1, d);
        } else {
            fecha_=new Date(fecha)
        }
        console.log("fecha: "+fecha_)
        dia_ = fecha_.getDay();
        // console.log("dia: "+dia_)
        dias_transcurridos = dia_ === 0 ? 6 : dia_;
        //fechas
        lunes = new Date(fecha_.getTime() - (dias_transcurridos * milisegundos_dia) + milisegundos_dia);
        // console.log("lunes: "+lunes)
        martes = new Date(lunes.getTime() + milisegundos_dia);
        // console.log("martes: "+martes)
        miercoles = new Date(martes.getTime() + milisegundos_dia);
        // console.log("miercoles: "+miercoles)
        jueves = new Date(miercoles.getTime() + milisegundos_dia);
        // console.log("jueves: "+jueves)
        viernes = new Date(jueves.getTime() + milisegundos_dia);
        // console.log("viernes: "+viernes)
        sabado = new Date(viernes.getTime() + milisegundos_dia);
        // console.log("sabado: "+sabado)
        domingo = new Date(sabado.getTime() + milisegundos_dia);
        // console.log("domingo: "+domingo)

        lunes.setUTCHours(0, 0, 0, 0)
        // console.log(lunes)
        martes.setUTCHours(0, 0, 0, 0)
        // console.log(martes)
        miercoles.setUTCHours(0, 0, 0, 0)
        // console.log(miercoles)
        jueves.setUTCHours(0, 0, 0, 0)
        // console.log(jueves)
        viernes.setUTCHours(0, 0, 0, 0)
        // console.log(viernes)
        sabado.setUTCHours(0, 0, 0, 0)
        // console.log(sabado)
        domingo.setUTCHours(0, 0, 0, 0)
        // console.log(domingo)

        lunes = lunes.toISOString()
        // console.log("lunes: "+lunes)
        martes = martes.toISOString()
        // console.log("martes: "+martes)
        miercoles = miercoles.toISOString()
        // console.log("miercoles: "+miercoles)
        jueves = jueves.toISOString()
        // console.log("jueves: "+jueves)
        viernes = viernes.toISOString()
        // console.log("viernes: "+viernes)
        sabado = sabado.toISOString()
        // console.log("sabado: "+sabado)
        domingo = domingo.toISOString()
        // console.log("domingo: "+domingo)
        ////
        // fecha_.setUTCHours(0, 0, 0, 0)
        // fecha = fecha_.toISOString()
    } else {
        console.error("Formato de fecha incorrecto, revisa el formato: " + fecha)
        return
    }

    dates.push(lunes,martes,miercoles,jueves,viernes,sabado,domingo)
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


    // console.log("arreglo dias: "+dates)

    let obj_principal = mkObj(nodo,clase,id)
    // obj_principal.style.flexDirection="column" // nota [ transponerCalendario ]
    // console.log(obj_principal)

    for (let i = 0; i < filas.length + 1; i++) {
        let fila_j = div(clase + "_fila", id + "_fila_" + filas[i-1]);
        fila_j.setAttribute("date", fecha);
        obj_principal.appendChild(fila_j);

        for (let i2 = 0; i2 < days.length + 1; i2++) {
        let celda_calendario = div(clase + "_celda_calendario", id + "_celda_calendario_" + days[i2 - 1] + "_fila_" + filas[i - 1]+"_columna_"+days[i2-1]);
        if (i === 0 && i2 === 0) {  // NOTA ---::>> ESQUINA

            let titulo_table_celda_calendario = mkText(celda_calendario,"p_celda_calendario_titulo_"+clase,"p_celda_calendario_titulo_"+id,titulo+"<br>"+meses[fecha_.getMonth()])
            celda_calendario.setAttribute("class", clase + "_celda_calendario_titulo_table");
            celda_calendario.setAttribute("id", id + "_celda_calendario_titulo_table");

        } else if (i === 0 && i2 > 0) { //HEADER
            // console.log(i2)
            let dateCalendario = dates[i2-1].replace(/T00:00:00.000Z/,"")
            let [año,mes,dia]=dateCalendario.split("-")
            // console.log([año,mes,dia])
            dateCalendario=dia+" - "+meses[parseInt(mes-1)]
            let head_table_celda_calendario = mkText(celda_calendario,"p_celda_calendario_head_"+clase,"p_celda_calendario_head_"+id,days[i2-1]+"<br>"+dateCalendario)
            celda_calendario.setAttribute("class", clase + "_celda_calendario_day");
            celda_calendario.setAttribute("id", id + "_day_table" + "_celda_calendario_" + days[i2 - 1] + "_" + i2);

        } else if (i > 0 && i2 === 0) { // ! COLUMNA MAIN
            let celda_elemento_fila = mkText(celda_calendario,"p_celda_elemento_fila_"+clase,"p_columna_main_"+id,filas[i-1])
            
            celda_calendario.setAttribute("class", clase + "_celda_calendario_titulo_fila");
            celda_calendario.setAttribute("id", id + "_celda_calendario_titulo_fila_main" + filas[i-1] + "_columna_main");
        } else {               
            
            // ! CONTENIDO TABLA
            celda_calendario.setAttribute("date",dates[i2-1])
            celda_calendario.setAttribute("id","celda_calendario_fila_"+filas[i-1]+"_columna_"+days[i2-1])
            celda_calendario.setAttribute("fila_name",filas[i - 1])
            //obj_calendario_celda_calendario

            celda_calendario.addEventListener("click",(x)=>{

                date_celda_calendario = fila_j.getAttribute("date")
                fila_name_celda_calendario = celda_calendario.getAttribute("fila_name")

                // console.log(celda_calendario)

                let ventana_update_celda_calendario = mkObj(body,"ventana_update_celda_calendario_"+clase,"ventana_update_celda_calendario_"+id)
                    if (document.getElementById("contenedor_update_celda"+id)) {
                        document.getElementById("contenedor_update_celda"+id).remove()
                    }
                    
                    let contenedor_update_celda = mkObj(ventana_update_celda_calendario,"contenedor_update_celda","contenedor_update_celda"+id)

                        let btn_cerrar_ventana_update_celda_calendario = mkObjImg(contenedor_update_celda,"btn_cerrar_ventana_update_celda_calendario","btn_cerrar_ventana_update_celda_calendario","./vista/img/close.png")
                            btn_cerrar_ventana_update_celda_calendario.addEventListener("mouseup",function () {
                                ventana_update_celda_calendario.remove()
                            })
                        let input_update_celda_calendario = mkObjTextarea(contenedor_update_celda,"input_update_celda_calendario_"+clase,"input_update_celda_calendario_"+id,"Agenda y actualiza información de tu empresa: "+fila_name_celda_calendario+" - "+date_celda_calendario)
                        let btn_actualizar_celda_calendario = mkObjButton(contenedor_update_celda,"btn_actualizar_celda_calendario","btn_actualizar_celda_calendario","Actualizar Información")
                        console.log(btn_actualizar_celda_calendario)

                        btn_actualizar_celda_calendario.querySelector("button").addEventListener("click",function () {
                            ventana_update_celda_calendario.remove()
                            console.log(btn_actualizar_celda_calendario)
                            celda_calendario.innerText=input_update_celda_calendario.querySelector("textarea").value

                        })

                        input_update_celda_calendario.querySelector("textarea").focus()



                            document.addEventListener("mouseup",function (element) {
                                if (!contenedor_update_celda.contains(element.target)) {
                                    ventana_update_celda_calendario.remove()
                                }
                            })
                            document.addEventListener("keypress",function (element) {
                                if (element.code==="Delete") {
                                    ventana_update_celda_calendario.remove()
                                }
                            })

            })

        }
        fila_j.appendChild(celda_calendario);


      }
    }

    return obj_principal
}



function mkCarrusel(nodo,clase,id,...url_imagenes) {
    nodo = nodo || "";
    clase = clase || "";
    id = id || "";

    let carrusel = mkObj(nodo,clase,id)
    carrusel.style.flexDirection="column"
    carrusel.style.position="relative"

        let contenedor_imagenes = mkObj(carrusel,"contenedor_imagenes_"+clase,"contenedor_imagenes_"+id)
            url_imagenes.forEach(url => {
                let formato = url.split(".")[1]
                console.log(formato)
                if (formato==="png"||formato==="svg") {
                    let img = mkObjImg(contenedor_imagenes,"img_carrusel_"+clase,"img_carrusel_"+id,url)
                }
                if (formato==="mp4") {
                    let video = mkObjVideoLoop(contenedor_imagenes,"img_carrusel_"+clase,"img_carrusel_"+id,url)
                    
                }
            });

        let contenedor_controles = mkObj(carrusel,"contenedor_controles_"+clase,"contenedor_controles_"+id)
        contenedor_controles.style.position="absolute"

            let btn_control_carrusel_anterior = mkObjButton(contenedor_controles,"btn_control_carrusel_"+clase,"btn_control_carrusel_anterior_"+id,"<")
            let btn_control_carrusel_siguiente = mkObjButton(contenedor_controles,"btn_control_carrusel_"+clase,"btn_control_carrusel_siguiente_"+id,">")
            btn_control_carrusel_siguiente.style.justifyContent="end"

            btn_control_carrusel_anterior.addEventListener('click', () => cambiarImagen(-1));
            btn_control_carrusel_siguiente.addEventListener('click', () => cambiarImagen(1));

    let imagenActual = 1;
    let numero_imagenes = url_imagenes.length

    function cambiarImagen(direccion) {
        imagenActual += direccion;

        // Ajustar la imagen actual si se llega al límite
        if (imagenActual > numero_imagenes) {
            imagenActual = 1;
        } else if (imagenActual < 1) {
            imagenActual = numero_imagenes;
        }

        // Calcular la posición de la transformación
        let posicionTransform = -100 * (imagenActual - 1);
        contenedor_imagenes.style.transform = `translateX(${posicionTransform}%)`;
    }

    setInterval(() => cambiarImagen(1), 6000);
}
