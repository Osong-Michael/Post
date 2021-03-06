import React from 'react';
import img1 from '../assets/images/import.PNG';
import img2 from '../assets/images/import-all.PNG';
import img3 from '../assets/images/defaultOptions.PNG';
import img4 from '../assets/images/const-data.PNG';
import img5 from '../assets/images/setTimeOut.PNG';
import img6 from '../assets/images/return.PNG';
import img7 from '../assets/images/code-block.PNG'

const Type2 = () => {
  return (
    <>
      <div>
        <h2>
          <strong>Type-2</strong>
        </h2>
        <div className="paragraph">Create new file and name it as PreLoader2.js</div>
        <div className="paragraph">
          Create functional component, and import react-Lottie library.
        </div>
        <div className="code-container">
           <img src={img1} alt="code-block" />
        </div>
        <div className="paragraph">
          In this type of loading screen we have to download animation files from&nbsp;
          <a href="https://lottiefiles.com/">https://lottiefiles.com/</a>
        </div>
        <div className="paragraph">For this tutorial i&#x27;m using below two files,</div>
        <div className="paragraph">
          Earth animation :&nbsp;
          <a href="https://lottiefiles.com/1055-world-locations">https://lottiefiles.com/1055-world-locations</a>
        </div>
        <div className="paragraph">
          Success animation:&nbsp;
          <a href="https://lottiefiles.com/1127-success">https://lottiefiles.com/1127-success</a>
        </div>
        <div className="paragraph">
          Download this file (Lottie JSON) and keep them in your project directory.
        </div>
        <div className="paragraph">Let&#x27;s import this json files like below,</div>
        <div className="code-container">
          <img src={img2} alt="code-block" />
        </div>
        <div className="paragraph">
          As mentioned <a href="https://www.npmjs.com/package/react-lottie">here</a>in
          the react-Lottie library documentation, we need to set default options to use
          this animation files in our project so first declare this options as,
        </div>
        <div className="code-container">
          <img src={img3} alt="code-block" />
        </div>
        <div className="paragraph">
          <em>defaultOptions1&nbsp;</em>for first file while <em>defaultOptions2&nbsp;</em>for
          second file.
        </div>
        <div className="paragraph">In this tutorial we&#x27;re going to use 3 state:</div>
        <div className="code-container">
          <img src={img4} alt="code-block" />
        </div>
        <div className="paragraph">
          <strong>data state</strong>: To store data which comes from API call.
        </div>
        <div className="paragraph">
          <strong>loading state</strong>: Boolean state for first animation file.
        </div>
        <div className="paragraph">
          <strong>completed state</strong>: Boolean state for second animation file when
          API call is completed.
        </div>
        <div className="code-container">
         <img src={img5} alt="code-block" />
        </div>
        <blockquote>You can put your own logic in useEffect!</blockquote>
        <div className="paragraph">
          UseEffect method is almost same as in part-1, only difference is that instead
          of done state we have to set completed and loading state to true, <br />Also,
          I have used one more timeout function for 1 sec to see the 2nd animation.
        </div>
        <div className="code-container">
         <img src={img6} alt="code-block" />
        </div>
        <div className="paragraph">As shown in the above code,</div>
        <div className="paragraph">
          in the return, if completed state is false then we will render loading screen
          else we will render our data.
        </div>
        <div className="paragraph">
          In the animation part we will do one more conditional rendering,
        </div>
        <div className="paragraph">
          when loading state is false then we will render the earth animation else we
          will render the success animation.
        </div>
        <div className="paragraph">
          Dont&#x27;t forget to set
            <code> options=&#123;defaultOptions1&#125; </code>
          for file 1 and
            <code> options=&#123;defaultOptions1&#125; </code>
          for file 2.
        </div>
        <div className="paragraph">Full Code:</div>
        <div className="code-container2">
         <img src={img7} alt="code-block" />
        </div>
        <div className="paragraph">
          Now as per the Creative Commons License of&nbsp;
          <a href="https://lottiefiles.com/page/license">https://lottiefiles.com/page/license</a>
          <em>&nbsp;The creator(s) must be attributed in your application.</em>
        </div>
        <div className="paragraph">
          You can attribute creator as shown in line no 60 to 71.
        </div>
        <div className="paragraph">That&#x27;s the end of Part-2.</div>
      </div>
    </>
  )
}

export default Type2;