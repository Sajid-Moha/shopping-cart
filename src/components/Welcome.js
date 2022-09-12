import React from 'react';

import cooking from "../media/cooking.jpg";

function Welcome() {
    return (
        <main className="home-welcome">
        <h1>People Love our Food!</h1>
            <article>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src={cooking} alt="person cutting produce in kitchen" id="cooking-thumbnail"></img>
                <p>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Ornare suspendisse sed nisi lacus sed. Sit amet tellus cras adipiscing. At tellus at urna condimentum mattis pellentesque id nibh tortor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Amet tellus cras adipiscing enim eu turpis. Sed arcu non odio euismod lacinia at quis risus sed. Congue quisque egestas diam in arcu cursus euismod quis viverra. Vel eros donec ac odio tempor orci dapibus ultrices. Eget egestas purus viverra accumsan. Commodo odio aenean sed adipiscing diam. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Augue eget arcu dictum varius duis. Enim tortor at auctor urna nunc id cursus metus aliquam. Ac felis donec et odio pellentesque diam volutpat commodo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl. Est ullamcorper eget nulla facilisi etiam dignissim. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis gravida neque convallis a. Bibendum enim facilisis gravida neque convallis a cras semper. Condimentum id venenatis a condimentum. Sed risus pretium quam vulputate dignissim. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Id semper risus in hendrerit gravida rutrum. Faucibus turpis in eu mi bibendum neque egestas congue. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Quisque egestas diam in arcu cursus euismod quis viverra. Sagittis purus sit amet volutpat consequat mauris nunc.
                </p>
            </article>
        </main>
    );
}

export default Welcome;