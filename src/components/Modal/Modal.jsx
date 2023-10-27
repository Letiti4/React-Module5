/* eslint-disable react/prop-types */
import '../Modal/Modal.styles.css'

const Modal = ({ open, fechaModal, handleExcluirConta }) => {

    const handleClose = (e) => {
        e.target.id === "modal" && fechaModal();
    };
    return (
        <>
            {open && (
                <div className="modal" id="modal" onClick={handleClose} >
                    <div className="contentModal">
                        <section className="header">
                            <p>Deseja realmente apagar a sua conta?</p>
                            <input id='confirmacao' type='password' placeholder='Digite sua senha para confirmar'></input>
                        </section>
                        <div className='botoes'>
                            <button className='btnEnviar' onClick={handleExcluirConta}>Excluir</button>
                            <button className='btnEnviar' id="modal" onClick={handleClose}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;

