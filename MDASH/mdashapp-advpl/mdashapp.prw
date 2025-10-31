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
    FwCallApp("mdashapp", , , , , , , , , .T.)
    // FWCallApp("mdashapp")
Return
