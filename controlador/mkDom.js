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

function mostrarPestaña(x,c) { 
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

function mathConcat(input_element) {
    let math_simbols = /[+\-*\/]/;

    input_element.addEventListener("blur", function () {
        if (math_simbols.test(input_element.value)) {
            input_element.value = eval(input_element.value);
        }
    });

    return input_element;
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

function mkAviso(node,c,i,text) {
    node?true:""
    c?true:""
    i?true:""
    text?true:""
    let obj_temp = mkText(node,c,i,text)
    obj_temp.style.color="red"

    return obj_temp
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
