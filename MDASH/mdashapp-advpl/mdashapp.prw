#include "protheus.ch"

/*/
    {Protheus.doc} mdash
    Chama o APP mdashapp para ser executado via rotina no Protheus

    @type       user function
    @author     Andrey Rebelatto
    @since      31/10/2025
    @version    1.0
    @param param_name, param_type, param_descr
    @return     nil
/*/

User Function mdashz()
    /*
        cApp	        Caracter	Nome do aplicativo
        oOwner	        Objeto	    Objeto Dialog para o caso de querer usar uma janela própria 
        oEngine	        Objeto	    Enviado por referência para o caso de querer manipular o objeto do TWebEngine	
        oChannel	    Objeto	    Enviado por referência para o caso de querer manipular o objeto do TWebChannel	
        cHost	        Caracter	Host para uma simples abertura de browse. Obs.: Caso enviado, todo pré-processamento será pulado	
        cSource	        Caracter	Nome do fonte, caso não seja o mesmo nome do APP.	
        Param7	                    Parâmetro interno	
        Param8	                    Parâmetro interno	
        Param9	                    Parâmetro interno	
        lUseOnBoarding	Lógico	    Indica se abre o wizard de configuração para utilizar apps (mais informações abaixo)
    */
    FwCallApp("mdashapp", , , , , , , , , .T.)
Return

/*
    Essa função irá receber e tratar as instruções Javascript que foram enviadas.

    Essa função recebe três parâmetros: oWebChannel que é o objeto do TWebEngine, 
    cType que indica qual o código da ação que foi definido e cContent que fornece 
    a informação que deve ser tratada.
*/

Static Function JsToAdvpl(oWebChannel, cType, cContent)
    Do Case
        // Se a interação que recebi for igual a mensagemJavascript
        Case cType == 'mensagemJavascript'
            // Imprimo no server a informação que recebi para trabalhar
            Conout(cContent)
    End
Return .T.
