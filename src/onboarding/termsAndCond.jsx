import React, {useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './onboarding.css'

export default function TermsAndConditions({ toggleModal }) {
    
    return (
        <div className='farmMainDiv'>
            <div style={styles.modalOverlay}>
                <h1>h</h1>
                <div className='modalContainer'>
                    {/* <div style={styles.modalHeader}>  */}
                    <div className='modalHeader'>
                        {<span onClick={toggleModal} style={styles.closeButton}>
                            ×
                        </span>}<h2>Terms And Conditions</h2>
                    </div>
                    <main>
                        <div style={styles.modalContent}>
                            <h2>Terms And Conditions</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis vitae aliquam quibusdam impedit natus ipsa, nesciunt nobis odit nihil, vel non. Repellendus aperiam aliquam eum. Obcaecati aliquam quod odit sequi?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores suscipit omnis magnam? Tenetur molestiae, est minus quod exercitationem obcaecati nemo velit ipsam, nulla a vero rerum, modi veniam at. Quo?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque consequuntur maxime rerum distinctio ipsam minima aut dolorem esse cupiditate. Error excepturi dignissimos nobis quia aliquam sint aspernatur laboriosam corrupti.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quasi deleniti consequuntur mollitia, odit blanditiis dolor inventore saepe, illum minima iure quaerat asperiores cum quia molestias veritatis quis quo alias.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis inventore voluptatum reprehenderit fuga consequuntur. Corporis explicabo modi cum rem ea, asperiores ipsam libero esse recusandae earum! Blanditiis, eos itaque?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ex praesentium eum, labore impedit sunt nam exercitationem provident esse ab minima, expedita, architecto culpa quasi alias molestias harum sit in!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus maiores velit praesentium fuga, fugit molestias facere quis, et ducimus exercitationem optio neque recusandae tempore delectus harum dolores officiis illo iusto.

                            </p>
                        </div>

                    </main>
                    <div  className='bt'>
                        <Link to='/register'>
                        <button className='button' >AGREE TO TERMS & CONDITIONS</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );

}


const styles = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 2,
        maxWidth: '40vw',
        minHeight: '75vh',
        margin: '0 auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'

    },
    closeButtonContainer: {
        // alignSelf: 'flex-end',
    },

    closeButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: 40,
        fontWeight: 'bold',
    },
    modalContent: {
        flex: 1,
    },
};