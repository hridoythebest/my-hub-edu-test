import { function1, variable1, variable2, variable3, function2, function3, project1, React1, React2, React3, React5, React4, deploy } from "./assets";
import ChallengeCard from "../components/ChallengeCard";
import HtmlSh from '../components/HtmlShower'

const imgTag = "<img/>"
const selfDiv = "<div/>"
const strDiv = "<div>"
const endDiv = "</div>"



export const solLinks = [
    {
        name: "Intro",
        text: "Intro",
        dropdowns: [
            {
                name: "Intro",
                text: "Intro to the course",
                id: 1, 
                content: <div className="ml-[60px]">
                    <h1 className="text-[30px] mb-5">Welcome to our Solidity course</h1>
                    <p className="text-[18px] max-w-[800px] leading-[30px]">Here you will learn to write 
                    smart contracts, understand and use most Blockchain concepts, and integrate them into your <strong>React</strong> applications.
                     If you've finished our other courses before this (HTML, CSS, Javascript and React.js), then congratulations on making  it this far.
                      If you are starting your Education at HUB with this course, that is also fine as you won't be required to know those languages to be able to learn <strong>Solidity</strong>.
                      <br/> <br /> And without further adue, let's begin our journey through the world of <strong>Blockchain</strong>. </p>
                </div>  
            },
            {
                name: "Contents",
                text: "Course Contents",
                id: 2,
                content: <div className="ml-[60px]">
                <h1 className="text-[30px] mb-[30px]">Here is a list of what you will learn throughout this course:</h1>
                <ul className="text-[18px] leading-[30px] ml-[15px]">
                    <li>Learn the basics of Solidity and blockchain</li>
                    <li>Create simple and advance smart contracts</li>
                    <li>Learn how crypto currencies work and how to work with them</li>
                    <li>Create nfts and other tokens</li>
                    <li>Use other smart contracts as a baseline for your project</li>
                    <li>Integrate smart contracts into yjavascript or React applications</li>
                </ul>
                </div>
            }
        ]
    }, {
        name: "Setup",
        text: "Setup",
        dropdowns: [
            {
                name: "VsCode",
                text: "Vs Code and node Js",
                id: 3,
                 
            },
            {
                name: "Remix IDE installation",
                text: "Remix IDE",
                id:4,
                content: <div>
<iframe width="1020" height="630" src="https://www.youtube.com/embed/uFa3IQcA2KM?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            },
            {
                name: "Remix explained",
                text: "Remix explained",
                id: 5,
                content: <div>
                   <iframe width="1020" height="630" src="https://www.youtube.com/embed/lPNoACSzV-o?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            }
        ]
    }, 
    {
        name: "Contracts",
        text: "Contracts",
        dropdowns: [
            {
                name: "Intro to contracts",
                text: "Intro to contracts",
                id:6,
                content: 
                <div className="">
              
<iframe width="1020" height="630" src="https://www.youtube.com/embed/sd7z1V6MuzM?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
                
                 
            },
            {
                name: "Second",
                text: "Second",
                id:7,
                
            },
            {
                name: "Smart contracts",
                text: "Smart contracts",
                id:8,
                content: 
                <div>
                    <h1 className="text-[30px] mb-[20px]">Smart Contracts</h1>
                    <p className="text-[18px]">While you are learning the basics of Solidity we will have two types of content: video and text.
                         Text elements are going to serve as recaps or more detailed for videos so that if you forget something you can quickly find it.
                         
                        <br/> <br/> Smart contracts are the only place you can run code in solidity. They are in some ways similar to React functional components,
                        or classes in languages like python. They are written with the <strong>contract</strong> keyword and followed by the name you give it,
                        which should always start with a capital. after that you use curly braces and write your code inside of them.


                         </p>
                </div>
               
            }
        ]
    }, 
    {
        name: "Variables",
        text: "Variables",
        dropdowns: [
            {
                name: "Intro to variables",
                text: "Intro to variables",
                id: 9,
                content: 
                <div >
                <iframe className="" width="1020" height="630" src="https://www.youtube.com/embed/BdzzcktIG0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe></div>
            },
            {
                name: "Variables",
                text: "Variables explained",
                id: 10,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Variables</h1>
                    
                    <p className="text-[18px]">Unlike other languages like javascript variables in Solidity are statically classed, 
                    meaning if you chose your variable to contain a number, it can only contain numbers and cannot have a string or another type. There are 4 types that we will be using now, however there are others that we will cover later. <br/> 
                    <ul className="mt-7 ml-2">
                        <li>Uint - positive integers or 0</li>
                        <li>Int - any integer</li>
                        <li>String - strings of any kind (for example text)</li>
                        <li>Boolean - true or false</li>
                    </ul> <br/>
                    Here is an example of them being declared:
                    </p>
                    <img className="my-5" src={variable1} alt="variable"/>

                    <p className="text-[18px]">Unlike other languages values like <em>undefined</em> or <em>Null</em> do not exist.
                    If a variable hasn't been assigned a value, then it will have a default one. For uint or int it's 0. For strings it's 
                    and empty string: " ", for bollean it's false. 
                    </p>

                    <p className="text-[18px]">Another aspect that is worth noting is that you have to select a visibility of public for your variable 
                    for you to be able to see it in the deploy menu.
                    </p> 

                    <img className="my-5" src={variable2} alt="variable"/>
                </div>
            }, 
            {
                name: "Challenge 1",
                text: "Challenge 1",
                id: 11,
                content: <div>
                    <ChallengeCard 
                    num="1"
                    text="Welcome to your first challenge. Try to complete it and check the solution to see if you succeeded. 
                    Your first challenge will be creating a variable firstNumber with public visibilty of type uint (0 or positive integer).
                    "
                    solution={<div className="ml-5">
                        uint public firstNumber;
                        </div>
                        }
                    />
                </div>
            },
            {
                text: "Challenge 2",
                id: 12,
                content: <ChallengeCard 
                num="2"
                text="Create variable myName with type string with public visibility and asign it a string value."
                solution={
                    <div className="ml-5">
                        string public myName = "HUB";
                    </div>
                }
                />
            },
            {
                text: "Challenge 3",
                id: 13,
                content: <ChallengeCard 
                num="3"
                text="What will be the default value of this variable?"
                challenge={
                    <div className="ml-5">
                        bool public thisBool;
                        </div>
                }
                solution={
                    <div className="ml-5">false</div>
                }
                />
            },
            {
                name: "Global and local variables",
                text: "Global and local variables",
                id: 14,
                content: <div className="max-w-[800px]">
                    <h1 className="text-[30px] mb-[20px]">Global and local variables</h1>
                    <p className="text-[18px] mb-8">In Solidity and other languages like javascript there is a concept of visibility,
                    meaning in what parts of you contract you can see certain variables. Variables declared in a contract and outside any functions
                    are called global variables and can be used any part of your smart contract. However variables declared inside a function can only be used
                    inside that function. They are essentially created every time a that function in run and deleted after all the instructions are completed.
                    </p>
                    <img src={variable3} alt="variable3"/>
                </div>
            },
            {
                text: "Challenge 4",
                id: 15,
                content: <ChallengeCard
                num="4"
                text="Make the local variable into a global one with public visibility."
                challenge={
                    <div>
                       &nbsp; contract Vars = &#123; <br/> <br/>

                        &nbsp; function local (params) public &#123; <br/>
                    &nbsp;&nbsp;&nbsp; uint num = 5; <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>
                    &nbsp;   &#125;
                    </div>
                }
                solution={
                    <div className="bg-[#BCCFCF] rounded-[10px]">
                        &nbsp; contract Vars = &#123; <br/> <br/>
                        &nbsp; uint public num = 5;  <br/> <br/>
                        &nbsp; function local () public &#123; <br/>
                   
                            
                        &nbsp; &nbsp; &#125;<br/> <br/>
                    &nbsp; &#125;
                    </div>
                }
                />
            }
        ]
    },
    {
        name: "Functions",
        text: "Functions",
        dropdowns: [
            {
                name: "Intro to functions",
                text: "Intro to functions",
                id: 16,
                content: <div>
                    
<iframe width="1020" height="630" src="https://www.youtube.com/embed/5v8EMIVxlb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>

                </div>
            },

            {
                name: "Function Structure",
                text: "Function Structure",
                id: 17,
                content: 
                <div>
                    <h1 className="text-[30px] mb-[15px]">Functions</h1>
                    <p className="text-[18px] max-w-[800px]">Functions are the main parts of the Solidity language, just like a lot of other languages, like javascript.
                        A reason is that Solidity is a very new language and has taken elements and similarities from other older languages
                        like C++ and javascript. It is also an object-oriented language.<br/> <br/> There is only one way to create a function 
                        and it is with the <em>function</em> keyword. Then we give it a name. After that we have brackets, into we can insert parameters (those are going to be covered later).
                        finally it is necessary to give it a visibility type. The most common one is public, and we will be using it for the majority of this course. 
                        Finally we open curly braces where we write our code.
                    </p>
                    <img className="my-8" src={function1} alt="function1"/>
                    <p className="text-[18px] max-w-[800px]">
                        Another thing that you should know is how you should name your contracts and functions. First of all there cannot be any spaces,
                        if the name consists of multiple words then the next word should start with a capital. Contract names should start with uppercase, while function 
                        and variable names start with lowercase and follow the same principles. This is demonstrated in the image above. <br/> <br/>
                        This would be incorrect: My_Contract, my.function. 
                        This would be correct: MyContract, myFunction.
                    </p>
                </div>
            }, 
            {
                text: "Challenge 5",
                id:18,
                content: <ChallengeCard 
                num="5"
                text= "Create a function with a name of sum and public visibility"
                challenge={
                    <div>
                        &nbsp; contract Vars = &#123; <br/> <br/>

                         &nbsp; &#125;
                    </div>
                }
                solution={
                    <div>
                    &nbsp; contract Vars = &#123; <br/> <br/>

                    &nbsp; function sum() public &#123; <br/>
                   
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                />
            },
            {

                text: "Function arguments intro",
                id: 19,
                content: <div>
                <iframe width="1020" height="630" src="https://www.youtube.com/embed/0teNspVBHkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            },
            {
 
                text: "Function arguments",
                id: 20,
                content: <div className="max-w-[800px]">
                    <h1 className="text-[30px] mb-[15px]">Function arguments</h1>
                    <p className="text-[18px] "> Oftentimes we want our functions to do different things depending on what value the user enters.
                    For that we have arguments. Arguments are put inside of the functions brackets and are very similar to local variables. The only difference being
                    that their value is decided by the user or by other functions.
                    </p>
                    <img className="my-8" src={function2} alt="function2" />
                    <p className="text-[18px]">Here the value of the global variable changes depending on what the user enters into the function. In our case it is done through the deploy menu.</p>
                    <img className="my-8" src={function3} alt="function3" />
                </div>
            },
            {
                text: "Challenge 6",
                id: 21,
                content: <ChallengeCard 
                num="6"
                text="Asign a value to the myBool variable through the function and its params."
                challenge={
                    <div>
                    &nbsp; contract Vars = &#123; <br/> <br/>

                    &nbsp; bool public myBool; <br/> <br/>

                    &nbsp; function asign() public &#123; <br/> <br/>
                   
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                solution={
                    <div>
                    &nbsp; contract Vars = &#123; <br/> <br/>

                    &nbsp; bool public myBool; <br/> <br/>

                    &nbsp; function asign(bool _myBool) public &#123; <br/> <br/>
                   
                    &nbsp;&nbsp;  myBool = _myBool; <br/> <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                />
            },
            {
                name: "Challenge 7",
                text: "Challenge 7",
                id: 22,
                content: <div>
                    <ChallengeCard  num="7" text="Fix the mistakes in this function" challenge={
                         <div className="bg-[#BCCFCF] rounded-[10px]">
                          <p className="p-5">

                    
                    contract Calculator &#123; <br/> <br/>
                    uint public myNum <br/> <br/>  

                    function sum(uint public _num1, uint public _num2) public  &#123; <br/>
                    &nbsp;&nbsp;&nbsp;  myNum = _num1 + _num2;<br/>
                    &nbsp; &#125;<br/><br/>
                    
                    &#125;
                    
                     </p>
                    </div>}
                        solution={
                            <div className="bg-[#BCCFCF] rounded-[10px]">
                            <p className="p-5"> 
         &nbsp; contract Calculator &#123; <br/> <br/>
        
        &nbsp; uint public myNum; <br/> <br/>  

        function sum(int _num1, int _num2) public  &#123; <br/>
        &nbsp;&nbsp;&nbsp; myNum = _num1 + _num2;<br/>
        &nbsp; &#125;<br/><br/>
        
        &#125;
        
        
        
                            </p>
                            </div>}
                    />
                </div>
            },
            {
                text: "Operators",
                id: 23,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Mathematical and other operators</h1>
                    <p className="text-[18px]">FIrst we will start with Mathematical operators. 
                       
                    </p>
                    <ul className="text-[18px] my-5 bg-[#BCCFCF] rounded-[10px]">
                        <div className="ml-2">
                            <li>Plus is +</li>
                            <li>Minus is -</li>
                            <li>Multiplication is *</li>
                            <li>Division is /</li>
                            <li>Assigning a power is **</li>
                            <li>More than is &gt;</li>
                            <li>Less than is &#60;</li>
                            <li>Less than or eqaul/more than or eqal to: &#60;=/&gt;=</li>
                            </div>
                        </ul>
                     <p className="text-[18px]">As you can see these are very similar to what we normally use. Now onto comparison operators. Comparison operators
                        are almost always used in if statements, if you have learned javascript then you are familiar with them. 
                     </p>
                     <ul className="text-[18px] my-5 bg-[#BCCFCF] rounded-[10px]">
                        <div className="ml-2">
                        <li>Equals to is == (Remember that a single equal sign "=" is used to assign a value and not to check it)</li>
                        <li>Not is !</li>
                        <li>Not equals to is !=</li>
                        <li>Or is ||</li>
                        <li>And is &&</li>
                        </div>
                     </ul>
                       <p className="text-[18px]">These are the main operators you are going to use. We will get into more detail on how to use them in the if statement section.</p>
                </div>
            },
            {
                text: "Challenge 8",
                id: 24,
                content: <ChallengeCard 
                num="8"
                text="Create a function that adds three params and stores the result in a global variable"
                challenge={
                    <div>
                    &nbsp; contract Demo = &#123; <br/> <br/>



                     &nbsp; &#125;
                </div>
                }
                solution={
                    <div>
                    &nbsp; contract Demo = &#123; <br/> <br/>

                    &nbsp; uint public finalNum; <br/> <br/>

                    &nbsp; function addition(uint _num1, uint _num2, uint _num3) public &#123; <br/> <br/>
                   
                    &nbsp; &nbsp;  finalNum = _num1 + _num2 + _num3; <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                />
            },
            {
                text: "View/return functions",
                id: 25,
                content: <div>

                </div>
            },
            {
                text: "View/return functions pt.2",
                id: 26,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">View, pure and return functions</h1>
                    <p className="text-[18px]">Sometimes we don't want a certain function to modify anything, but to return something to the user.
                    In these situations view/pure return functions come in use. A function marked as view doesn't modify anything outside of it, but does use information from outside.
                    Pure functions don't modify or use anything from the smart contract. All their data comes from the user. An example would be a calculator,
                    which as a matter of fact you will be creating in the next section. <br/> <br/>

                   In a pure/view function we need it to return the result to the user, so we mark the function as returns (), and signify what type of value we want to return.
                   <div className="bg-[#BCCFCF] rounded-[10px] text-[20px] p-3 mt-3">
                        function number() pure returns (uint) &#123; <br/> <br/>
                        return 5; <br/> <br/>
                        &#125;
                    </div>


                    This is an example of a pure function. Although this one isn't particularly useful, as it simply returns the same number each time you use it. Here is a better one: 
                    <div className="bg-[#BCCFCF] rounded-[10px] text-[20px] p-3 mt-3">
                        function number(uint _num) pure returns (uint) &#123; <br/> <br/>
                        return _num;  <br/> <br/>
                        &#125;
                    </div>

                    Now it returns the number that the user has entered. As you can see it is still pure as we are not using any data from the contract, just from the user.
                    </p>
                   
                </div>
            },
            
            {
                text:"Challenge 9",
                id: 27,
                content: <ChallengeCard 
                num="9"
                text="Identify this function as pure or as view."
                challenge={ <div>
                    &nbsp; contract Demo = &#123; <br/> <br/>

      

                    &nbsp; function addition(uint _num1, uint _num2, uint _num3) public returns(uint) &#123; <br/> <br/>
                   
                    &nbsp; &nbsp;  return _num1 + _num2 <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div> }
                solution={<div>
                    &nbsp; contract Demo = &#123; <br/> <br/>

      

                    &nbsp; function addition(uint _num1, uint _num2, uint _num3) public pure returns(uint) &#123; <br/> <br/>
                   
                    &nbsp; &nbsp;  return _num1 + _num2 <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                />
            },
            {
                text: "Challenge 10",
                id: 28,
                content: <ChallengeCard 
                num="10"
                text="Change this function to return the sum instead of asigning it to a variable."
                challenge={
                    <div>
                    &nbsp; contract Demo = &#123; <br/> <br/>

                    &nbsp; uint public finalNum; <br/> <br/>

                    &nbsp; function addition(uint _num1, uint _num2, uint _num3) public &#123; <br/> <br/>
                   
                    &nbsp; &nbsp;  finalNum = _num1 + _num2 + _num3; <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                solution={
                    <div>
                    &nbsp; contract Demo = &#123; <br/> <br/>

                    &nbsp; function addition(uint _num1, uint _num2, uint _num3) public pure returns(uint) &#123; <br/> <br/>
                   
                    &nbsp; &nbsp;  return _num1 + _num2 + _num3; <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div> 
                }
                />
            },
        ]
    }, 
    {
        name: "Project1",
        text: "Project 1: Calculator",
        dropdowns: [
            {
                name: "Project instructions",
                text: "Project instructions",
                id: 29,
                content: <div className="max-w-[800px]">
                    <h1 className="text-[30px] mb-[15px]">Calculator</h1>
                    <p className="text-[18px] mb-8">Currently you have learned enough about the Solidity language to be able to make your first project.
                        Your goal is to make a calculator consisting of four functions(addition, subtraction, division, multiplication).
                        It should be able to do these operations with two numbers, meaning each function should have two parameters. 
                        Also you should mark your functions as pure (as shown in the image below), this indicates that your function does not use or modify
                        any external variables or functions.
                         
                    </p>
                    <img src={project1} alt="project1" />
                    <p className="text-[18px]">The next page contains the final result in case you are having issues with completing the project.
                        <br/> <strong>Good Luck!</strong>
                     </p>
                </div>
            }, 
            {
                name: "Complete project",
                text: "Complete project",
                id: 30,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Project Code</h1>
                    <p className="text-[18px] mb-8">If your project looks something like this, then congratulations on completing your first Solidity project.
                     Things will only get more interesting from now!</p>
                    <div className="bg-[#BCCFCF] rounded-[10px]">
                    <p className="p-5">
// SPDX-Lecense-Indentifier: MIT <br/>
pragma solidity ^0.8.0; <br/> <br/>

contract Calculator &#123; <br/> <br/>

function sum(int _num1, int _num2) public pure returns (int) &#123; <br/>
&nbsp;&nbsp;&nbsp;  return _num1 + _num2;<br/>
    &#125;<br/><br/>

function sub(int _num1, int _num2) public pure returns (int) &#123; <br/>
&nbsp;&nbsp;&nbsp;  return _num1 - _num2; <br/>
    &#125;<br/><br/>

function mult(int _num1, int _num2) public pure returns (int) &#123;<br/>
&nbsp;&nbsp;&nbsp;  return _num1 * _num2;<br/>
    &#125;<br/><br/>

function dev(int _num1, int _num2) public pure returns (int) &#123;<br/>
&nbsp;&nbsp;&nbsp;  return _num1 / _num2;<br/>
    &#125;<br/><br/>

&#125;



                    </p>
                    </div>
                </div>
            },
            {
                text: "Creating the project",
                id: 31,
                content: <div>
                    <iframe width="940" height="630" src="https://www.youtube.com/embed/sP2yrpMdn-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            }
        ]
    },
    {
        name: "Addresses",
        text: "Addresses",
        dropdowns: [
            {
                text: "Intro to addresses",
                id:32,
                content: <div><iframe width="940" height="630" src="https://www.youtube.com/embed/BAGgvQ9L8vs?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            },
            {
                text: "Addresses",
                id: 33,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Addresses</h1>
                    <p className="text-[20px]">Addresses are a data type unique to Solidity. The reason being that Solidity was made for the ethereum blockchain.
                        First of all, what are addresses? Just like you have an email address, a crypto wallet also has an address. These addresses start with 0x followed by 40 symbols, for example
                         0xa80F2D0038D36a9F7452D44F0773c6Bf333F0De5. All actions in a solidity smart contract can only be made while connected to an ethereum wallet. <br/> <br/> The reason you didn't know this is because
                         Remix has already simulated this. If you go to your deploy menu, at the top you can see an account section. If you click on it you will see a list of ethereum addresses,
                         each one with a balance of 100 ether. Obviously these aren't real addresses and this isn't real ether, but they are used for testing purposes, and work exactly like normal ethereum accounts.

                         <img src={deploy} alt="deploy" className="h-[30%] w-[30%] mb-3"/>

                            Now that we're done with the general theory, let's actually look at how to work with addresses. To make a variable with type address, we follow the exact same principles as before.

                            <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                                address public myAddress;
                            </div>

                            Firstly let's asign an address manually to our variable.
                            <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                                address public myAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
                            </div>
                            
                            A big part of ethereum wallets is their balance (the amount of ether that is stored on that account). To see the balance of an account we write .balance after the address.

                            <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                            function getBalance () public view returns (uint) &#123; <br/>
                            return myAddress.balance; 
                                 <br/>
                        &nbsp; &#125; <br/> 
              
                            </div>
                            Using .balance we can see the balance of any ethereum wallet that exists, because all information that is stored on the blockchain is open-source. <br/>
                            
                         </p>
                </div>
            },
            {
                text: "Challenge 11",
                id: 34,
                content: <ChallengeCard 
                num="11"
                text="Add an argument of type address to this function and return its balance through the function."
                challenge={<div className="p-2">
                    contract Address &#123; <br/>
                    function getBalance () public &#123; <br/>
                        
                    &#125; <br/>
                    &#125;
                </div>}
                solution={<div className="p-2">
                contract Address &#123; <br/>
                function getBalance (address _address) public view returns (uint) &#123; <br/>
                    return _address.balance;
                &#125; <br/>
                &#125;
            </div>}
                />
            },
            {
                text: "Working with ether",
                id: 35,
                content: <div><iframe width="940" height="630" src="https://www.youtube.com/embed/R1RcKY3ZNHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            },
            {
                text: "Receive ether",
                id: 36,
                content: <div>
                     <h1 className="text-[30px] mb-[15px]">Receiving ether</h1>
                    <p className="text-[20px]">Let's create a contract that allows us to move funds in and out of the contract. Create a new file and contract
                    in Remix and write a getBalance () function in it, which will return the current balance of the contract.
                    <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                contract Funds &#123; <br/>
                function getBalance () public view returns (uint) &#123; <br/>
                    return address(this).balance; <br/>
                &#125; <br/>
                &#125;
            </div>

            This is a function you should remember, as it's probably the most used function in all of Solidity. Let's go over the insides of this function. 
            The keyword 'this' means this contract, and by saying address(this) we are saying this contracts address. Yes, just like wallets, solidity contracts also have their own
            addresses and methods like .balance and .transfer also work on them.  <br/> <br/>

            Now let's add part responsible for receiving money. For a function to be able to receive ether, it needs to be marked as payable.
            <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    // SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>
               
                contract Funds &#123; <br/>
                uint public fundsReceived; <br/> <br/>

                function receiveFunds () public payable &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>


                function getBalance () public view returns (uint) &#123; <br/>
                    return address(this).balance; <br/>
                &#125; <br/>
                &#125;
            </div>

            As you can see we marked the receiveFunds function as payable (next to public), this is all that's required to receive ether. 
            We also created a variable that stores the amount of ether that was received (it doesn't store the actual ether, it just stores a number).
            Msg.value is the amount of ether that was received by the function during this transaction. <br/> <br/>

            To send money to the contract in Remix, go to your deploy menu, deploy your contract,  go to the Value section, enter any number and click receiveFunds.
            Check that your transaction was successful by clicking getBalance, and seing if you get more than 0.

            

                    </p>
                   
                </div>
            },
            {
                text: "Withdraw ether",
                id: 37,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Withdraw ether</h1>
                    <p className="text-[20px]">You've learned how to get ether into the contract, now let's look at how to get it out.
                    Let's create a function to withdraw the balance of the contract to the person who called the function.

                    <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                function withdraw () public  &#123; <br/>
                address payable receiver = payable(msg.sender);<br/>
                 receiver.transfer(getBalance());
                     <br/>
                &#125; <br/>
                    </div>
                    First of all we create a local variable receiver, and mark it as payable, as that address is going to be receiving ether. We give it the value of msg.sender,
                    meaning the person the called the function, and also mark it as payable. Finally we use the .transfer method on our receiver variable. Inside the brackets we
                    say how much we want to transfer, so we call the getBalance function which gives us the balance of the contract. This is how the complete contract should look.

                    <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    // SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>
               
                contract Funds &#123; <br/>
                uint public fundsReceived; <br/> <br/>

                function receiveFunds () public payable &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>


                function getBalance () public view returns (uint) &#123; <br/>
                    return address(this).balance; <br/>
                &#125; <br/>

                function withdraw () public  &#123; <br/>
                address payable receiver = payable(msg.sender);<br/>
                 receiver.transfer(getBalance());
                     <br/>
                &#125; <br/>
                
                &#125;
            </div>

            Now you should test it our yourself in Remix. Send some ether to the contract as explained earlier, and withdraw it to any account. 
                    </p>

                  
                </div>
            },
            {
                text: "Challenge 12",
                id:38,
                content: <ChallengeCard 
                num="12"
                text="This function is meant to receive money. Change it in any necessary way for it to work."
                challenge={<div className="p-2">
                    function receiveFunds () public view returns (uint) &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>
                </div>}
                solution={<div>
                    function receiveFunds () public payable &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>
                </div>}
                />
            },
            {
                text: "Challenge 13",
                id:39,
                content: <ChallengeCard 
                num="13"
                text="Create a function that transfers the contracts balance ether to an address passed through an argument."
                challenge={<div className="p-2">
                      // SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>
               
                contract Funds &#123; <br/>
                uint public fundsReceived; <br/> <br/>

                function receiveFunds () public payable &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>


                function getBalance () public view returns (uint) &#123; <br/>
                    return address(this).balance; <br/>
                &#125; <br/>

                
                &#125;
                </div>}
                solution={<div>
  // SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>
               
                contract Funds &#123; <br/>
                uint public fundsReceived; <br/> <br/>

                function receiveFunds () public payable &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>


                function getBalance () public view returns (uint) &#123; <br/>
                    return address(this).balance; <br/>
                &#125; <br/>

                function sendFunds (address payable _addr) public  &#123; <br/>
                 _addr.transfer(getBalance());
                     <br/>
                &#125; <br/>
                
                &#125;
                </div>}
                />
            },
        ]
    },
    {
        name: "Complex types",
        text: "Complex types",
        dropdowns: [
            {
            text: "Mapping intro", 
            id: 40,
            content: <div><iframe width="940" height="630" src="https://www.youtube.com/embed/DQhmk9jbKvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        },
        {
            text: "Mappings",
            id: 41,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">Mappings</h1>
               <p className="text-[20px]"> Before we have looked only at variables as a way to store data, but there are many others. One of such ways are mappings.
               Mappings store their data as key/value pairs. This means that for every key there is a value. For example we want to store the names and ages of people, 
               this would be a good use for a mapping. For every name (key), there would be a age (value). This is how this would be made is Solidity: <br/> <br/>

            <div  className="bg-[#BCCFCF] rounded-[10px] p-2 mb-2">
                mapping (string =&gt; uint) public myMapping;
            </div>

            Inside the brackets we chose the data types for our key/value pair with an 'arrow' in between them, here we've chosen a string as a key and a positive integer as a value.
             This could be used in the example above with the name-age pairings. <br/> <br/>

            There are some limitaions for the what can be a key. Any simple data type: uint, int, bool, string, address, byte can be keys, but other mappings or complex types, which we will covered
            in this section, cannot be keys. <br/> <br/>


            Values however can be anything, meaning along with simple data types, they can also be mappings, structs and other complex types. <br/> <br/>

            Now let's look at how to assign key/value pairs through functions: <br/> <br/>

              <div  className="bg-[#BCCFCF] rounded-[10px] p-2 mb-2">
              // SPDX-License-Identifier: GPL-3.0 <br/>
                pragma solidity ^0.8.0; <br/> <br/>
                contract myMappings &#123; <br/> <br/>
                    mapping (address =&gt; bool) public myMapping; <br/> <br/>

                    function assign () public &#123; <br/>
                        myMapping [msg.sender] = true; <br/>
                        &nbsp; &#125; <br/> 
                &#125; <br/>
            </div>

            In this example we asign the address of the person that calls the function as the key, and true as the value. As you can see we asign the key in square brackets,
            and the value through our usual asign operator '='. You should test this contract in remix. <br/> <br/>

            As you have marked the mappings as public, you should be able to see it in your deploy menu in remix. In the bar next to the mappings name (in the deploy meny) your can enter the key and it will return the value. 

               </p>
            </div>
          },
          {
            text: "Challenge 14",
            id: 42,
            content: <ChallengeCard 
            num="14"
            text="Create a mapping called addrMap with an address as a key and a string as a value."
            solution={ <div  className="bg-[#BCCFCF] rounded-[10px] p-2 mb-2">
            mapping (address =&gt; string) public addrMap;
        </div>}
            />
          },
          {
            text: "Challenge 15",
            id: 43,
            content: <ChallengeCard 
            num="15"
            text="Add a function to this contract that will add the address of the caller to the mapping as the key, and the persons name as the value. The name
            should be passed as an argument.
            
            "

            challenge={<div className="p-2">
                //SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>

contract MappingsNames &#123;<br/>
  mapping(uint =&gt; string) public addrMap; <br/><br/>

  &#125; <br/>
            </div>}
            solution={<div>
                //SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>

contract MappingsNames &#123;<br/>
  mapping(uint =&gt; string) public addrMap; <br/><br/>

  function addPerson (string memory _name) public &#123;<br/>
    addrMap [msg.sender] = _name; <br/>
    &nbsp; &#125;<br/>

  &#125; <br/>
            </div>}
            />
          },
          {
            text: "Intro to arrays",
            id: 44,
            content: <div className=""><iframe width="940" height="630" src="https://www.youtube.com/embed/QRxaaEkWNAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          },
          {
            text: "Arrays",
            id: 45,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">Arrays</h1>
                <p className="text-[20px]">Another way to store data are arrays. An array is essentially a list of items of the same data type.
                Unlike in other languages you have to specify what type of data you are going to store in that array. So you can store only addresses, for example,
                or only numbers: 

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    uint [5] numbers = [1, 2, 3, 4, 5];
                </div>

                As you can see arrays are declared just like variables but with square brackets after the type. There are two main types of arrays, dynamic and static. Dynamic arrays are flexible and can
                hold a practically infinite amout of items. Static arrays can ony hold a specified amount of items. The example above is a static array. In the brackets we specified how many items are going to be in it.
     What should be noted is that these kinds of arrays always store five numbers, even if you didn't specify them.
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    uint [5] numbers = [1, 2, 3];
                </div>
                To the computer the numbers in the array above are actually [1 , 2 , 3 , 0 , 0]. <br/> <br/>

                For dynamic arrays we keep the first brackets empty, and usually don't specify any values:
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    uint [] numbers;
                </div>

                To add items to a dynamic array we use functions:
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

                contract Arrays &#123; <br/> <br/>
                uint [] numbers; <br/> <br/>

                    function assign () public &#123; <br/>
                        numbers.push(1); <br/>
                        numbers.push(2);
                         <br/>
                        &nbsp; &#125; <br/> 
                &#125; <br/>
            </div>
            However push cannot be used for static arrays. To do that we need to signify the index in the array in square brackets and asign a value.

            <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

                contract Arrays &#123; <br/> <br/>
                uint [2] public numbers; <br/> <br/>

                    function assign () public &#123; <br/>
                        numbers[0] = 1; <br/>
                        numbers[1] = 2;
                         <br/>
                        &nbsp; &#125; <br/> 
                &#125; <br/>
            </div>
            As you can see the first index that we used was the index 0. In arrays you start counting the index from 0 and not from 1. Index 1 is the second element,
            index 2 is the third, and so on.
                </p>
            </div>
          },
          
          {
            text: "Challenge 16",
            id: 46,
            content: <ChallengeCard
            num="16"
            text="Create a static array with type string and a length of three. Asign three names (strings) to the array."
            solution={<div>
                string [3] names = [John, Jack, Mary];
            </div>}
            />
          },
          {
            text: "Challenge 17",
            id: 47,
            content: <ChallengeCard 
            num="17"
            text="Create a function that allows you to add a new name to the names array through arguments."
            challenge={ <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

            contract NameList &#123; <br/> <br/>
            uint [] public names; <br/> <br/>

            &#125; <br/>
        </div>}
        solution={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

        contract NameList &#123; <br/> <br/>
        uint [] public names; <br/> <br/>

        function addName (string memory _name) public &#123; <br/>
            names.push(_name);
                 <br/>
                &nbsp; &#125; <br/> 
        &#125; <br/>
    </div>}
            />
          },
          {
            text: "Challenge 18",
            id:48,
            content: <ChallengeCard 
            num="18"
            text="Add a function that replaces an element in the array. There should be two arguments: the index that is going to be replaced and the new element."
            challenge={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

            contract NameList &#123; <br/> <br/>
            uint [] public names; <br/> <br/>
    
            function addName (string memory _name) public &#123; <br/>
                names.push(_name);
                     <br/>
                    &nbsp; &#125; <br/> 
            &#125; <br/>
        </div>}
        solution={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

        contract NameList &#123; <br/> <br/>
        uint [] public names; <br/> <br/>

        function addName (string memory _name) public &#123; <br/>
            names.push(_name)
                 <br/>
                &nbsp; &#125; <br/> <br/>

                function replaceName (uint _idx, string memory _name) public &#123; <br/>
            names [_idx] = _name;
                 <br/>
                &nbsp; &#125; <br/>

        &#125; <br/>
    </div>}
            />
          },
          {
            text:"Array operations",
            id: 49,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">Array operations</h1>
                <p className="text-[20px]">In the previous lesson you learned the basics of arrays, however there are more things you can do with them that you should know.
                First of all, the pop method, this only works on dynamic arrays and allows you to remove the last element of the array. 

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

contract Arrays &#123; <br/> <br/>
uint [] numbers = [1, 2, 3, 4]; <br/> <br/>

    function pop () public &#123; <br/>
            numbers.pop();  
         <br/>
        &nbsp; &#125; <br/> 
&#125; <br/>
</div>
            This will make the array [1, 2, 3]. <br/> <br/>
Quite often it is useful to know the amount of elements in an array, a.k.a it's length. This is how you can use it: 
<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

contract Arrays &#123; <br/> <br/>
uint [] numbers = [1, 2, 3, 4]; <br/> <br/>

    function pop () public &#123; <br/>
            numbers.pop();  
         <br/>
        &nbsp; &#125; <br/> <br/>

    function seeLength () public view returns (uint) &#123; <br/>
        return numbers.length;<br/>
        &nbsp; &#125; <br/>  <br/>
&#125; <br/>
</div>

        If you deploy the contract above, click pop and the click seeLength, you will get 3. <br/> <br/>

        Another thing you can do is return arrays through functions. However just like with strings you have to signify memory after the type:
        <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

contract Arrays &#123; <br/> <br/>
uint [] numbers = [1, 2, 3, 4]; <br/> <br/>

    function pop () public view returns (uint[] memory) &#123; <br/>
            return numbers;
         <br/>
        &nbsp; &#125; <br/> 
&#125; <br/>
</div>
                </p>

            </div>
          },
         
          {
            text: "Challenge 19",
            id:50,
            content: <ChallengeCard 
            num="19"
            text="This challenge will be bigger than most.
             Inside this contract add three functions, one to add new addresses, one to remove the final element, and one to see the length of the array."
             challenge={<div className="p-2">
                contract Arrays &#123; <br/> <br/>
                uint [] numbers addresses; <br/> <br/>
                &#125;
             </div>}
             solution={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

             contract Arrays &#123; <br/> <br/>
             uint [] numbers addresses; <br/> <br/>

                function addAddress (address _newAddress) public &#123; <br/>
                    addresses.push (_newAddress) <br/>
                &#125; <br/> <br/>
             
                 function pop () public &#123; <br/>
                         addresses.pop();  
                      <br/>
                     &nbsp; &#125; <br/> <br/>
             
                 function seeLength () public view returns (uint) &#123; <br/>
                     return addresses.length;<br/>
                     &nbsp; &#125; <br/>  <br/>
             &#125; <br/>
             </div>}
            />
          },
          
          

          {
            text: "Enum",
            id: 51,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">Enums</h1>
                <p className="text-[20px]">Of the four complex types explained in this section, this one is the least used, but still worth knowing.
                Enums are use to show different states of something. This is how they are made:
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2"> 
                enum WaterStatus &#123; Solid, Liquid, Gas &#125;
                </div>

                In the example above we created a new type which only has three possible values: Solid, Liquid and Gas. A single one of these is called an enum.
                For a single type we can have up to 255 enums. We can asign the type that we just created to variable, instead of asigning them a type like uint or string.
                So, let's create a variable like that.

               

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2"> 
                contract Enums &#123; <br/>
                enum WaterStatus &#123; Solid, Liquid, Gas &#125; <br/> <br/>

                WaterStatus public currentstatus;   <br/>
                &#125;
                </div>
                Next we can asign the variable one of the three possible values:

                
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2"> 
                contract Enums &#123; <br/>
                enum WaterStatus &#123; Solid, Liquid, Gas &#125; <br/> <br/>

                WaterStatus public currentStatus;   <br/>

                function makeIce () public &#123; <br/>
                currentStatus = WaterStatus.Solid;
                 &#125;
                &#125;
                </div>
                </p>
                
            </div>
          },
          {
            text: "Challenge 20",
            id: 52,
            content: <ChallengeCard 
            num="20"
            text="Create an enum type called PurchaseStatus with four enums: Started, Paid, Delivered, Received. Then create a variable with
            the PurchaseStatus type.
            "
            solution={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2"> 
            contract Enums &#123; <br/>
            enum PurchaseStatus &#123;Started, Paid, Delivered, Received  &#125; <br/> <br/>

            PurchaseStatus public currentstatus;   <br/>
            &#125;
            </div>}
            />
          },
          {
           text: "Intro to structs",
            id: 53,
            content: <div>
<iframe width="940" height="630" src="https://www.youtube.com/embed/B2O01c3VIds?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          },
          {
            text: "Structs",
            id: 54,
            content: <div>
              <h1 className="text-[30px] mb-[15px]">Structs</h1>
                <p className="text-[20px]">Unlike other complex types, structs don't actually store data, they create a new type of data consisting of basic types. 
                For example, we have a person, and we want to store information about multiple people. However a person is something complex. A person has a name, an age, a nationality, a gender etc..
                A struct allows you to combine all that info and make it its own data type. Here is an example of a struct using the example above:

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    struct Person &#123; <br/>
                       &nbsp; string name; <br/>
                       &nbsp;  uint age;<br/>
                       &nbsp;  string nationality;<br/>
                       &nbsp;  string gender;<br/>
                    &#125;
                </div>
                As you can see this doesn't store any data, but it give us an idea of what a person is. Stucts are usually used inside arrays and mappings. Let's use the struct above in an array.

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    Person [] public people;
                </div>

                In this example every single element of the array will contain information about a person. 
                But how do we actually add a new person through a function? This is the most readable way:
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2 text-[18px]">
                    function addPerson (<br/>string memory _name, <br/> uint _age, <br/>sring memory _country, <br/>string memory gender) public &#123; <br/><br/>
                        Person memory person = Person(&#123;<br/>
                        &nbsp; name: _name, <br/>
                        &nbsp; age: _age, <br/>
                        &nbsp; nationality: _country, <br/>
                        &nbsp; gender: _gender <br/>
                        &#125;)<br/>
                        people.push(person); <br/>
                    &#125;
                </div>
                This looks quite complicated so let's look at it line by line. Firstly we asign four arguments to the function, 
                something you've already done plenty of times.
                Then we create a new variable, with the type Person, meaning this variable should hold a name, age, nationality and gender. The following 
                syntax on this line simply needs to be remembered, the name of the struct, normal brackets and then curly brackets. After that we asign an argument to its
                corresponding value in the struct. Finally we push the variable we just created into our people array. <br/> <br/>

               Structs can also be used as values in mappings. <br/> 

               <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-3">
                mapping (string =&gt; Person) public people;
               </div>

                Structs are some of the most difficult concepts to understand in Solidity, so don't worry if you don't memorize all of this on your first try.
                </p>
              
            </div>
          },
          {
            text: "Challenge 21",
            id: 55,
            content: <ChallengeCard
            num='21'
            text="Create a struct called User, with 3 parameters: address (ethereum address), name, age"
            solution={
                <div>
                    struct User &#123; <br/>
                    &nbsp; address userAddress;<br/>
                    &nbsp; string name;<br/>
                    &nbsp; uint age;<br/>
                    &#125;
                </div>
            }
            />
          },
          {
            text: "Challenge 22",
            id: 56,
            content: <ChallengeCard 
            num="22"
            text="Add a function through which you can add new users to the users array."
            challenge={<div className="p-2">
                &nbsp; contract Structs = &#123; <br/> <br/>

                struct User &#123; <br/>
                    &nbsp; address userAddress;<br/>
                    &nbsp; string name;<br/>
                    &nbsp; uint age;<br/>
                    &#125; <br/> <br/>

                User [] public users; <br/> <br/>


 &nbsp; &#125;
            </div>}
            solution={<div className="p-2">
             contract Structs = &#123; <br/> <br/>

            struct User &#123; <br/>
                &nbsp; address userAddress;<br/>
                &nbsp; string name;<br/>
                &nbsp; uint age;<br/>
                &#125; <br/> <br/>

            User [] public users; <br/> <br/>

            function addUser (<br/>address _address, <br/>string memory _name, <br/> uint _age, ) public &#123; <br/><br/>
                    Person memory person = Person(&#123;<br/>
                    &nbsp; userAddress: _address, <br/>
                    &nbsp; name: _name, <br/>
                    &nbsp; age: _age, <br/>
                    &#125;)<br/>
                    users.push(person); <br/>
                &#125;

&nbsp; &#125;
        </div>}
            />
          },
        ]
    },
    {
        name:"Operators",
        text: "Operators",
        dropdowns: [
            {
                text: "If statements intro",
                id: 57,
                content: <div>
                    <iframe width="940" height="630" src="https://www.youtube.com/embed/SDvh6TjNj7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
            },
            {
                text: "If/else",
                id: 58,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">If/Else operator</h1>
                    <p className="text-[20px]">Sometimes we want a part of our code to run only if a certain condition is true. If that condition isn't true, we want another code to run. For that we use the if/else operator. 
                    Let's look at how it should look.

                 <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-3">
                    if (condition 1) &#123; <br/>
                        // Action if condition 1 is true <br/>
                     &#125; <br/>
                     else if (condition 2) &#123; <br/>
                        // Action if condition 2 is true <br/>
                     &#125; <br/>
                     else  &#123; <br/>
                        // Action if neither condition is true <br/>
                     &#125; <br/>
               </div>
                    Solidity is a language made around money, so let's look at a contract that checks if the money that was sent corresponds to the price. 
                    If everything is correct we send a success message, if the payment is less that the price we return a message about insufficient funds, 
                    and if neither are correct we return an error message. Ps: this function doesn't actually transfer any ether, we'll be making a more realistic
                    contract later on. 
                    
                    <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-3">
                    contract Payment  &#123; <br/>

uint public price = 30; <br/> <br/>

function buyProduct (uint _payment) public payable view returns (string) <br/>
                    if (_payment == price) &#123; <br/>
                        return 'Success' <br/>
                     &#125; <br/>
                     else if (price &gt; _payment ) &#123; <br/>
                        return 'Insufficient funds' <br/>
                     &#125; <br/>
                     else  &#123; <br/>
                       return 'Payment error' <br/>
                     &#125; <br/>
                     &#125; <br/>
                     &#125;
               </div>

               For smaller conditions that only have an if and else, without an else if, we can use a ternary operator, which is a shortened version of the if/else operator.
               Let's shorten the previous function.
               
               <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-3">
               function buyProduct (uint _payment) public payable view returns (string) <br/>
                 return _payment == price ? 'Payment successful' : 'Payment error' <br/>
                     &#125; <br/>
                    
                    </div>
                    Here if the price and payment correspond to each other, we get a success message, otherwise we get an error message.
                    </p>
                </div>
            },
            {
                text: "Challenge 23",
                id: 59,
                content: <ChallengeCard 
                num="23"
                text="Create a function that checks is a number that comes from arguments is even, if it is return a message saying even, else return a message saying odd.
                To check if something is even you write number % 2 == 0.
                "
                challenge={<div className="p-2">
      contract Even  &#123; <br/>




                     &#125;
                </div>}
                solution={<div>
                          contract Even &#123; <br/>


function checkEven (uint _num) public pure returns (string) <br/>
                    if (_num % 2 == 0) &#123; <br/>
                        return 'even'; <br/>
                     &#125; <br/>

                     else  &#123; <br/>
                       return 'odd'; <br/>
                     &#125; <br/>
                     &#125; <br/>
                     &#125;
                </div>}
                />

            },
            {
                text: "Challenge 24",
                id: 60,
                content: <ChallengeCard 
                num="24"
                text="Rewrite the previous contract as a ternary operator."
                challenge={<div className="p-2">
                    contract Even &#123; <br/>


function checkEven (uint _num) public pure returns (string)  &#123; <br/>
              if (_num % 2 == 0) &#123; <br/>
                  return 'Even'; <br/>
               &#125; <br/>

               else  &#123; <br/>
                 return 'Odd'; <br/>
               &#125; <br/>
               &#125; <br/>
               &#125;
          </div>
        }
        solution={
            <div>
                          contract Even &#123; <br/>


function checkEven (uint _num) public pure returns (string) &#123; <br/>
                return _num % 2 == 0 ? "Even" : "Odd";
                     &#125; <br/>
                     &#125;
                </div>
        }
                />
            },
            {
                text: "Challenge 25",
                id: 61,
                content: <ChallengeCard 
                num="25"
                text="Create a function that is payable and has an if/else statement.
                 If the amount of money that entered the function is equal to the price, return a success message, else return an error message."
                 challenge={
                    <div className="p-2">
                         contract Payment  &#123; <br/>

uint public price = 30; <br/> <br/>



function buyProduct (uint _payment) public &#123; <br/>
                  
                     &#125; <br/>
                     &#125;
                    </div>
                 }
                 solution={
                    <div>
                           contract Payment  &#123; <br/>

uint public price = 1 ether; <br/> <br/>


function buyProduct () public payable returns (string memory) &#123; <br/>
                    if (msg.value == price) &#123; <br/>
                   return "Payment success";
                         <br/>
                     &#125; <br/>
                    
                     else  &#123; <br/>
                       return "Payment error"; <br/>
                     &#125; <br/>
                     &#125; <br/>
                     &#125;
                    <br/>
                     // Note: if you test this out in remix, no messages are going to appear under the function, they appear in the transaction info in you console. This will be explained later on.
                    </div>
                 }
                />
            },
            {
                text: "Intro to loops",
                id: 62,
                content: <div></div>
            },
            {
                text: "Loops",
                id: 63,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Loops</h1>
                    <p className="text-[20px]">Loops are used to repeat an action while a certain condition is true. Just like in most languages,
                    there are three types of loops in solidity: for, while and do while. However the last two are practically never used and are essentially just worse versions of 
                     for loops, and in the case of a mistake can cost you a lot of money, so the for loop is the only one we are going to cover. <br/> <br/>

                     This is how you create one:
                     <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-3"> 
                     function loop () public  &#123;
                        <HtmlSh text="for (uint i=0; i < 10; i++) {"/> 
                        &#125;
                        &#125;
                     </div>
                     Inside the brackets of the for loops we have three parts. First of all we create a uint variable that only exists inside the loops. You can 
                     call if whatever you want but it's usually called i. Next we set a limit for i. In this case i can be anything from 0 to 9. And then we set the interval at which i increases.
                    In this case i increases by 1 with every iteration of the loop. Let's demonstrate how this works. With every iteration of the loop, we are going to push the current state of i
                    into an array. We should get an array of 10 numbers.
                    <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-3"> 
                    contract Loops &#123; <br/>
                    uint [] public myArray; <br/> <br/>
                     function loop () public  &#123; 
                        <HtmlSh text="for (uint i=0; i < 10; i++) {"/> 
                        myArray.push(i); <br/>
                        &#125; <br/>
                        &#125;
                        &#125;
                     </div>
                     First the loops starts at 0, so 0 is pushed into the array, on the next iteration it is 1, so 1 is pushed into the array, this goes until 9. 
                     You should test this out in Remix. <br/> <br/>

                     The usual purpose of loops is to work with arrays, but in a different manner.
                     
                     <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-3"> 
                    contract Loops &#123; <br/>
                    uint [] public myArray = [1,2,3,4,5]; <br/> <br/>
                     function loop () public  &#123; 
                        <HtmlSh text="for (uint i=0; myArray.length; i++) {"/> 
                        myArray[i]; <br/>
                        &#125; <br/>
                        &#125;
                        &#125;
                     </div>

                    In this loop the loop has a limit of the length of the array, and increases by one with every iteration. Also we put i as the index in the array,
                    which means that with every iteration of the loop, we look at a different index in the array, until there are no more indexes. 
                    This is the easiest way at checking all of the elements in an array, and do something with them.

                    </p>
                </div>
            },
            {
                text: "Challenge 26",
                id: 64,
                content: <ChallengeCard 
                num="26"
                text="Create a loop that has a limit of 15 and increases by two each iteration"
                challenge={ <div  className="p-2"> 
                contract Loops &#123; <br/>

                 function loop () public  &#123; <br/>
                
                    &#125; <br/>
                    &#125;
                 </div>}
                solution={ <div> 
                contract Loops &#123; <br/>
                 function loop () public  &#123; 
                    <HtmlSh text="for (uint i=0; i<15; i+=2) {"/> 

                    &#125; <br/>
                    &#125; <br/>
                    &#125;
                 </div>}
                />
            },
            {
                text: "Challenge 27",
                id: 65,
                content: <ChallengeCard 
                num="27"
                text="Create a loop that loops through the numbers array"
                challenge={<div className="p-2
                ">
                  contract Loops &#123; <br/>
                     uint[] public numbers = [1, 3, 2, 4, 6, 7, 9, 12]; <br/>

                 function loop () public  &#123; <br/>


                    
                    &#125; <br/>
                    &#125;  
                </div>}
                solution={
                    <div>
                          contract Loops &#123; <br/>
                     uint[] public numbers = [1, 3, 2, 4, 6, 7, 9, 12]; <br/>

                 function loop () public  &#123; <br/>

                 <HtmlSh text="for (uint i; i < numbers.length; i++) {"/>
                    numbers[i]; <br/>
                 &#125; <br/>
                    
                    &#125; <br/>
                    &#125; 
                    </div>
                }
                />
            },
             {
                text: "Challenge 28",
                id: 66,
                content: <ChallengeCard 
                num="28"
                text="Create a loop that loops through the numbers array, and if the number is even, pushes it into the evens array, otherwise, pushes it into the odds array."
                challenge={<div className="p-2">
                     contract Loops &#123; <br/>
                     uint[] public numbers = [1, 3, 2, 4, 6, 7, 9, 12]; <br/>
                uint[] public evens; <br/>
                uint[] public odds; <br/> <br/>
                 function loop () public  &#123; <br/>


                    
                    &#125; <br/>
                    &#125;
                </div>}
                solution={<div>
                contract Loops &#123; <br/>
                uint[] public numbers = [1, 3, 2, 4, 6, 7, 9, 12]; <br/>
                uint[] public evens; <br/>
                uint[] public odds; <br/> <br/>

                 function loop () public  &#123; 

                    <HtmlSh text="for (uint i; i < numbers.length; i++) {"/> 
                        if (numbers[i] % 2 == 0) &#123; <br/>
                        evens.push(numbers[i]); <br/>
                        &#125; <br/>
                        else &#123; <br/>
                        odds.push(numbers[i]); <br/>
                        &#125; <br/>
                    &#125; <br/>
                    &#125; <br/>
                    &#125;
                 </div>}
                />
            },

        ]
    }

]



  export const HTMLlinks = [
    {
        name: "Intro",
        text: "Intro",
        dropdowns: [
            {
                name: "Intro",
                text: "Intro to the course",
                id: 1,
                content: <div>
                    <h1>Welcome to our HTML course</h1>
                    <p>here you will learn to write smart contracts and integrate them into your application</p>
                </div>
            },
            {
                name: "Contents",
                text: "Course Contents",
                id: 2,
                content: <>
                <h1 className="mb-[10px]">Here is a list of what you will learn:</h1>
                <ul>
                    <li>Create smart contracts</li>
                    <li>Create nfts and other tokens</li>
                    <li>Use other smart contracts as a baseline for your project</li>
                    <li>integrate smart contracts into your app</li>
                </ul>
                </>
            },
            
        ]
    }, 
    // {
    //     name: "Setup",
    //     text: "Setup",
    //     dropdowns: [
    //         {
    //             name: "VsCode",
    //             text: "Vs Code and node Js",
                 
    //         },
    //         {
    //             name: "Remix IDE",
    //             text: "Remix IDE",
                 
    //         }
    //     ]
    // }, 
    {
        name: "Tags",
        text: "Basic Web Pages",
        dropdowns: [
            {
                name: "First",
                id: 4,
                text: "How to create a web page",

            },
            {
                text: "Basic file structure",
                id: 5,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Your first webpage</h1>
                    <p className="text-[20px]">All webpages in the internet use Html in one way or another, so it's a very important language. This language
                    creates the layout of of webpage - where titles, paragraphs, lists etc. go.
                     To make a webpage 
                    you need a code editor, as we have explored before, the most famous and arguably the best one is Visual Studio Code. Next you need a folder to store you project.
                    You can create it on the Desktop and drag it into Vs Code. And the final thing you need to do is create a file called 'index.html'. Usually a webpage has multiple files,
                    and when you launch your programm the computer needs to know which file to launch. For that purpose we always create a file called index.html, which is the one that the computer looks at first.
                    Next lesson we will be creating the layout of the file.
                    </p>
                </div>
                
            },
            {

                text: "File layout",
                id: 6,
                content: <div>
                     <h1 className="text-[30px] mb-[15px]">File layout</h1>
                    <p className="text-[20px]">This is an example of a Html file: 
                    <div className="bg-[#BCCFCF] rounded-[10px] p-2">
                 <HtmlSh text=" <!DOCTYPE html>"/>  
                <HtmlSh text="<html>" />
                 <HtmlSh text="<head>"/>  

                 <HtmlSh text=" <title>Document</title>"/>     
                 <HtmlSh text="</head>"/>  
                 <HtmlSh text="<body>"/>  
                        
                 <HtmlSh text="</body>"/> 
                 <HtmlSh text=" </html>"/> 
                 </div>
                This language consists of tags. There are two types of tags. Closing tags and self-closing tags. A self closing tag is like the first one, it is simply alone.

                But all the other tags have a closing one. For example the html tag opens as the second tag, and closes as the last tag. Everything inside these tags are part of your webpage.
                The next pair of tags is the head tags. Inside of them we have the title. This is what the user sees above the webpage. And finally, the most important part,
                the body tags. This is where you will be writing  all of your code, as it is the part that the user sees.


                    </p>
                </div>
               
            },
            {
                text: "Important tags",
                id: 7,
                content: <div>

                </div>
            },
            {
                text: "More important tags",
                id: 8,
                content: <div>
                     <h1 className="text-[30px] mb-[15px]">Important tags</h1>
                    <p className="text-[20px]">Right now we'll be looking at some important tags in Html. The first tag we'll be looking at is the h1 tag.</p>
                </div>
            }
        ]
    }, 
    {
        name: "Links and images",
        text: "Links and images",
        dropdowns: [
            {

            }
        ]
    },
    
    {
        name: "Intro to Css",
        text: "Intro to Css",
        dropdowns: [

        ]
    }
]

export const ReactLinks = [
    {
        name: "Intro",
        text: "Intro",
        dropdowns: [
            {   
                text: "Intro to React",
                id: 1,
                content:<div>
                    <h1 className="text-[30px] mb-[15px]">React</h1>
                    <p className="text-[18px]">Welcome to our React course, unlike other courses there are some prerequisites you need for this course,
                    specifically a basic understanding of Html, Css, and Javascript, as they are the main components of React. The official terminology
                    is that React is a Javascript library, but in simple words it's a mixture of Javascript and Html with some unique syntax.

                    </p>
                </div>
            },
        ]
    },
    {
    name: "JSX",
    text: "JSX",
    dropdowns: [
        {
            text: "JSX",
            id: 4,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">JSX</h1>
                <p className="text-[18px] mb-8">React code consists of two parts: Javascript, which isn't always used and is used to make you page interactive,
                and JSX, which is always  used. It is the front end part of your application (the part that the user sees). It is very similar to Html code
                and follows most of the same principles. There are two main differences that you should know. First of all self closing tags. In Html they are written
                line normal tags but in Jsx there is and extra slash at the end: <HtmlSh text="<input/>"/>. Another thing is adding Css classes, which is done with the className keyword
                instead of class. Otherwise everything is mostly the same.
                </p>
            </div>
        },
        {
            text: "Challenge 1",
            id: 5,
            content: <ChallengeCard 
            num="1"
            text="Create a self closing Jsx tag called Footer."
            solution={<HtmlSh text="<Footer/>"/>}
            />
        },
        {
            text: "Challenge 2",
            id: 6,
            content: <ChallengeCard 
            num="2"
            text="Add an Css attribute called header to this tag."
            challenge={<HtmlSh text="<h1>Hello</h1>"/>}
            solution="<h1 className='header' >Hello </h1>"
            />
        }
       ]

    },

    {
        name: "Functional Components",
        text: "Components",
        dropdowns: [
            {
                text: "Intro to components",
                id: 5,
                content: <div>
                    <iframe width="1020" height="630" src="https://www.youtube.com/embed/SAha-XJzcLM?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            },
            {
                text: "Functional components",
                id: 6,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">
                        Functional components
                    </h1>
                    <p className="text-[18px]">Functional components are what create a complete React webpage. They are used
                    to divide our page, to help reusability, and to make the code more readable. By syntax they are a normal Javascript function.
                    It is best to write them as arrow functions to help code readability but it doesn't make a difference in functionality. <br/> Note: the file must be
                    a .jsx file and you must import React at the start of the file. Also the name of the function must start with a capital letter, Otherwise
                    there will be technical issues.
                    <br/><br/>
                    The inside of a component is divided into two parts: javascript and jsx. Inside the components you need to create a return()

                    statement. Inside its brackets you can write Jsx code. This is the part that the end user will see. However anything outside the statement
                    but inside the component should either be nothing, javascript, or a react hook (these will be explained later). Some components that the user
                    does not interact with won't have any javascript, however if you want the user to be able to click on something or interact with the page in any other way
                    you will need some javascript.
                    </p>

                    <img src={React1} alt="React1"/>
                </div>
            },
            {
                text: "Challenge 3",
                id: 7,
                content: <ChallengeCard 
                num="3"
                text="Create a functional component with a name of Footer that returns an h1 tag."
                solution={<div>
                    const Footer = () =&gt; &#123; <br/> <br/>
                     

                    return (
                        <HtmlSh text="<h1>Hello</h1>" />
                    )
                    &#125;
                </div>}
                />
            },
            {
                text: "Components in apps",
                id: 8,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">How components are really used</h1>
                    <p className="text-[20px] ml-2">You have learned the basics of components, but how are they really used? They are made 
                    as parts of a web page. Usually you would have an App components which only serves the purpose of housing all other main components,
                    but doesn't show any contents on its own. In these cases components are almost always self closing tage.

                    <br/> <br/> An example of an app: <br/> <br/>
                    </p>
                    <div className="bg-[#BCCFCF] rounded-[10px] text-[20px]">
                    function App() &#123;
                 
                   <HtmlSh text="<Navbar/>" class="ml-5"/>
                  <HtmlSh text="<Logo/>" class="ml-5"/>
                  <HtmlSh text="<Hero/>" class="ml-5"/>
                  <HtmlSh text="<Info/>" class="ml-5"/>
                  <HtmlSh text="<Screen1/>" class="ml-5"/>
                 <HtmlSh text="<Screen2/>" class="ml-5"/>
                <HtmlSh text="<Footer>" class="ml-5"/>
                &nbsp; &#125;
                    </div>
                    <br/>
                    <p className="text-[20px] mt-[15px] ml-2">
                    
                    Here you can see how the App component of a well made React app would look like, composing each important part in its own file and component. <br/>
                    
                    Doing this isn't a must but it is beneficial. If there is an error in one of the components,
                    you only need to look for it in that component and not in the entire application. And it makes you code look more clean and professional.
                    </p>
                </div>
            },
            {
                text:"Challenge 4", 
                id: 9,
                content: <ChallengeCard
                    num="4" 
                    text="Create a functional component app which houses 3 other components called Navbar, Welcome and Footer"
                    solution={<div>
                         &nbsp;    function App() &#123;
                 
                 <HtmlSh text="<Navbar/>" class="ml-5"/>
                <HtmlSh text="<Welcome />" class="ml-8"/>
              <HtmlSh text="<Footer>" class="ml-5"/>
              &nbsp; &#125;
                    </div>}
                />
            },
            {
                text: "Component files",
                id: 10,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Component files</h1>
                    <p className="text-[20px] ml-2">A React application is made up of multiple components and files. It is recommended to store a single component per file
                        and have the file and component have the same name. For example if you have a components called Navbar, the file should be Navbar.jsx.

                        <br/> <br/> Another part of an app is the index.jsx component, the point of entry to you application. It is usually called App.jsx. However we can't just use a
                        componenent in another file, we have to export and import it.
                    </p>
                    <img src={React2} alt="React2" className="my-5"/>
                    <p className="text-[20px]">Here we are exporting the component Test using the keywords export default. This allows us to use this component in other files.</p>
                    <img src={React3} alt="React3"  className="my-5"/>
                    <p className="text-[20px]">Here we are importing the component into the App.jsx file. ./ means that the Test and App components are in the same folder,
                    which won't be the case in large applications.
                    
                    </p>
                </div>
            },
            {
                text: "Challenge 5",
                id:11,
                content: <ChallengeCard 
                num="5"
                text="Create a component named Footer and export it"
                solution={<div>
                &nbsp; import React from 'react' <br/> <br/>

                &nbsp;const Footer = () =&gt; &#123; <br/>



                &nbsp; return (
                     <HtmlSh text="<div>" class="ml-2"/> &nbsp;Footer  <HtmlSh text="</div>" class="ml-2"/>
                     &nbsp;&nbsp;   &#125;) <br/>


                     &nbsp;&nbsp;export default Footer
                </div>}
                />
            },
            {
                text:"Challenge 6",
                id: 12,
                content: <ChallengeCard 
                num="6"
                text="Import the component that you made in the previous challenge into the App component, and use it."
                challenge={<div>
                     &nbsp; import React from 'react' <br/> <br/>

&nbsp;const App = () =&gt; &#123; <br/>



&nbsp; return (
     <HtmlSh text="<div>" class="ml-2"/> &nbsp;Put component here  <HtmlSh text="</div>" class="ml-2"/>
     &nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default App
                </div>}
                solution={
                    <div>
                         &nbsp; import React from 'react' <br/> 
                         &nbsp; import Footer from './Footer' <br/> <br/>

&nbsp;const App = () =&gt; &#123; <br/>



&nbsp; return (
     <HtmlSh text="<div>" class="ml-2"/> <HtmlSh text="<Footer/>" />  <HtmlSh text="</div>" class="ml-2"/>
     &nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default App
                    </div>
                }
                />
            }
        ]
    },
    
    {
        name: "External technologies",
        text: "External technologies",
        dropdowns: [
            {
                text: "Vite",
                id: 13,
                content: <iframe width="1020" height="630" src="https://www.youtube.com/embed/qceQkGHgyxw?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },
            {
                text: "Tailwind css",
                id: 14,
                content: <div><iframe width="1020" height="630" src="https://www.youtube.com/embed/6bR92JmRdeQ?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            },
            {
                text: "Components with Vite",
                id: 15,
                content: <iframe width="1020" height="630" src="https://www.youtube.com/embed/v1dHVH8waMI?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            }
        ]
    },
    {
        name: "Props",
        text: "Props",
        dropdowns: [
            
            {
                text: "Intro to Props",
                id: 16,
                content: <iframe width="1020" height="630" src="https://www.youtube.com/embed/_4Gh8cuxzIA?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },
            
            {
                text:"What are props",
                id:17,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]" >What are props?</h1>
                    <p className="text-[20px]">The beauty of React is in its reusability, and props are made just for that.
                    There are some components which are only used once in a web page, but others that are used many times,
                    but are always slightly different. For example we have a component that welcomes a user by saying welcome + the users name. 
                    People have different names so we can't do what we usually did, we have to use props. 

                    <img src={React4} alt="React4" className="my-5"/>

                    We enter props into the function brackets to signify that we will use them. To add a prop we use curly brackets and in them write props.+ the name of the prop (your choice).

                    <img src={React5} alt="React5" className="my-5"/>

                    Here we use the component in the App.jsx file and give a value to the prop called name. If we run this programm we will see 'Welcome John'
                    on the screen.
                    
                    </p>
                </div>
            },
            {
                text:"Challenge 100",
                id: 100,
                content: <ChallengeCard 
                text="Create a button that, the text of which comes from props."
                solution={
                    <div>
                         &nbsp; import React from 'react' <br/> <br/>0


&nbsp;const Button = (props) =&gt; &#123; <br/>



&nbsp; return (
     <HtmlSh text="<button>" class="ml-2"/> <HtmlSh text="{props.button}" />  <HtmlSh text="</button" class="ml-2"/>
     &nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Button
                    </div>
                }
                />
            }
        ]
    },
    {
        name: "Project 1",
        text: "Project 1",
        dropdowns: [
            {
                text: "Project brief",
                id: 18,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Your first project</h1>
                    <p className="text-[20px]">Welcome to your first project. Here you will be creating some components for the future.
                    Create a vite application as taught before and add Tailwindcss. Next add a components folder in your src folder. You 
                    will be making all your components there. 
                    Here is a list of components you will need: <br/> <br/>

                     <HtmlSh text="A <Button/> component which returns a button with some good looking styles of your choosing, and that text from props."/> <br/>
                     <HtmlSh text="A <Input /> component which returns an input  which accepts type, placeholder, and name from props." /> <br/>
                     <HtmlSh text="A <Link /> component which returns an a tag with href atribute from props." /> <br/> <br/>

                     Export all of these components and import them into your App.jsx file. Place them in any order you like. <br/> <br/>

                     Good Luck!

                    </p>
                </div>
            },
            {
                text: "Solution",
                id: 19,
                content: <> 
                <h1 className="text-[30px] mb-[25px]">Solution</h1>
                <div className="text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px] mb-[50px]">
                    <HtmlSh text="//App.jsx" class="ml-2"/> <br/> 

                      &nbsp; import React from 'react' <br/> 
                         &nbsp; import &#123; Button, Input, Link &#125; from './components' <br/> <br/>

                             &nbsp;const App = () =&gt; &#123; <br/>



                                &nbsp; return (
                             <HtmlSh text="<div>" class="ml-2"/> <HtmlSh text="<Button text= 'Click me' />" class="mx-3"/> 
                             <HtmlSh text="<Link href= 'https://hub-university.com' text='Our website' />"  class="mx-3"/>
                             <HtmlSh text="<Input type='text' placeholder='Enter your name' name='name' />" class="mx-3"/>
                              <HtmlSh text="</div>" class="ml-2"/>
                          &nbsp;&nbsp;   &#125;) <br/>


                               &nbsp;&nbsp;export default App
                </div>

                <div className="text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px] mb-[50px]">
                  
                <HtmlSh text="//Button.jsx" class="ml-2"/> <br/> 

         &nbsp; import React from 'react' <br/> 
 

       &nbsp;const Button = (props) =&gt; &#123; <br/>



          &nbsp; return (
       <HtmlSh text="<button>" class="ml-2"/> <HtmlSh text="{props.text}" />  <HtmlSh text="</button>" class="ml-2"/>
    &nbsp;&nbsp;   &#125;) <br/>


         &nbsp;&nbsp;export default Button
         </div> 

         <div className="text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px] mb-[50px]">
                  
                  <HtmlSh text="//Input.jsx" class="ml-2"/> <br/> 
  
           &nbsp; import React from 'react' <br/> 
   
  
         &nbsp;const Input = (props) =&gt; &#123; <br/>
  
  
  
            &nbsp; return (
         <HtmlSh text="<input type={props.type} name={props.name} placeholder={props.placeholder} />" class="mx-3"/> 
      &nbsp;&nbsp;   &#125;) <br/>
  
  
           &nbsp;&nbsp;export default Input
           </div> 
            
           <div className="text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px] mb-[50px]">
                  
                  <HtmlSh text="//Link.jsx" class="ml-2"/> <br/> 
  
           &nbsp; import React from 'react' <br/> 
   
  
         &nbsp;const Link = (props) =&gt; &#123; <br/>
  
  
  
            &nbsp; return (
         <HtmlSh text="<a href={props.href}>" class="ml-2"/> <HtmlSh text="{props.text}" />  <HtmlSh text="</a>" class="ml-2"/>
      &nbsp;&nbsp;   &#125;) <br/>
  
  
           &nbsp;&nbsp;export default Link
           </div> 

                </>
            }
        ]
    },
    {
        name: "useState",
        text: "useState",
        dropdowns: [
            {
                text: "State",
                id:20,
                content: <div>
                <h1 className="text-[30px] mb-[15px]">What is useState</h1>
                <p className="text-[20px]">Although React does use Javascript in some cases it doesn't use it like you are used to.
                And the main difference are variables. If you have a static variable (one that never changes), then nothing changes,
                but if you want the variable to change you have to use useState. <br/> <br/>

                To be able to use a React hook such as useState you need to import it: <br/> <br/>

                <HtmlSh text="import {useState} from React;" class="bg-[#BCCFCF] rounded-[10px] h-[35px]"/> <br/>

                However we already have an import from React, which is React itself, so we can combine them: <br/> <br/>

                <HtmlSh text="import {useState}, React from React;" class="bg-[#BCCFCF] rounded-[10px] h-[35px]"/> <br/>

                A state variable is called with useState(). Inside the brackets we put the default value of the argument. For example we have a variable
                called number, and we want the default value to be zero, then we call useState(0). <br/>
                Calling useState returns an array with two elements. The state value, and a function that we can use to change the state. The function is always
                 written as set + the state name starting with a capital letter.
                This is how it normally looks: <br/> <br/>

                <HtmlSh text="const [number, setNumber] = useState(0);" class="bg-[#BCCFCF] rounded-[10px] h-[35px]"/> <br/>

        

                Inside a component it would look like this: <br/> <br/>

                <div className="bg-[#BCCFCF] rounded-[10px] mb-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Count = () =&gt; &#123; <br/> <br/>

   &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>

      &nbsp; return (
   <HtmlSh text="<div>" class="ml-2"/> <HtmlSh text="{number}"/>  <HtmlSh text="</div>" class="ml-2"/>

   
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Count

                </div>
                However state doesn't have to be a number. It can be any value that a variable can be, meaning it can also be a string or boolean value.
                </p>
                </div>

            },
            {
                text: "Challenge",
                id: 21,
                content: <ChallengeCard 
            text="Add a useState named word with a default value of an empty string. Display the value in the return statement."
            challenge={  <div className="bg-[#BCCFCF] rounded-[10px] mb-5">
            <HtmlSh text="import React from 'react' " />  <br/> 


&nbsp;const Words = () =&gt; &#123; <br/> <br/>



  &nbsp; return (



 ) <br/>


 &nbsp;&nbsp;export default Words

            </div>}
            solution={  <div className="bg-[#BCCFCF] rounded-[10px] mb-5">
            <HtmlSh text="import React, {useState} from 'react' " />  <br/> 


&nbsp;const Words = () =&gt; &#123; <br/> <br/>

&nbsp;  const  [word, setWord] = useState(""); <br/> <br/>

  &nbsp; return (
<HtmlSh text="<div>" class="ml-2"/> <HtmlSh text="{word}"/>  <HtmlSh text="</div>" class="ml-2"/>


&nbsp;&nbsp;   &#125;) <br/>


 &nbsp;&nbsp;export default Words

            </div>}
                />
            },
            
            {
               text: "How to change state",
               id: 22,
               content: <div>
                <h1 className="text-[30px] mb-[15px]">Changing State</h1>
                <p className="text-[20px]">
                    We have looked at what state is and how to implement it, but we don't yet know how to change it. But to do that 
                    we will first learn the onClick atribute. For a button to do something you need to be able to click it. Inside 
                    onClick we call a function, usually a callback function. 

                    <HtmlSh text="<button onClick={() => console.log('There has been a click')}> Click  </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-5" />

                    Here we have a simple button that returns a sentence to the console every time a button is clicked. It is a callback function in
                    curly brackets. But this button isn't very useful. Lets try changing the state with it. For that we will use our setNumber function taught
                    we created previously. To asign a new value to the number value we need to input the value into the brackets of the state function.
                    <HtmlSh text="<button onClick={() => setNumber(1)}> Click me </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-5" />
                    But this also isn't useful on it's own as we are simply asigning a value to the state. But what is we want the value to increment by one on every click.
                    <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-5" />

                    In this case we are adding 1 to the current value of number, meaning that it will increase every time we test the button. You can test this 
                    yourself to be certain. <br/>
                    A complete component would look like this:

                    <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Count = () =&gt; &#123; <br/> <br/>

   &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>

      &nbsp; return (
        <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Count

                </div>
                
                </p>
               </div>
            },
            {
                text: "Challenge 9",
                id: 23,
                content: <ChallengeCard 
                text="Make it so that when you click the button it returns 'Welcome to our webpage' in the console"
                challenge={ <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Welcomer = () =&gt; &#123; <br/> <br/>


      &nbsp; return (
        <HtmlSh text="<button> Welcome </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Welcomer

                </div>}
                solution={<div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Welcomer = () =&gt; &#123; <br/> <br/>


      &nbsp; return (
        <HtmlSh text="<button onClick={() => console.log('Welcome to our webpage)}> Welcome </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Welcomer

                </div>}
                />
            },
            {
                text: "Challenge 10",
                id: 24,
                content: <ChallengeCard 
                text="Use the component Count from the previous lesson and add a decrement button which decreases the value of number by 1.
                "
                challenge={
                    <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Count = () =&gt; &#123; <br/> <br/>

   &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>

      &nbsp; return (
        <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Count

                </div>}

                solution={
                    <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Count = () =&gt; &#123; <br/> <br/>

   &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>

      &nbsp; return (
        <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
        <HtmlSh text="<button onClick={() => setNumber(number - 1)}> Decrement </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
     
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Count

                </div>}
                />
            },
            {
                text:"Challenge 11",
                id: 25,
                content: <ChallengeCard 
                text="Add a reset button to this component which resets the number state to 0"
                challenge={ <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Count = () =&gt; &#123; <br/> <br/>

   &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>

      &nbsp; return (
        <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
        <HtmlSh text="<button onClick={() => setNumber(number - 1)}> Decrement </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
       
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Count

                </div>}
                solution={
                    <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                    <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
       
      
       &nbsp;const Count = () =&gt; &#123; <br/> <br/>
    
       &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>
    
          &nbsp; return (
            <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
            <HtmlSh text="<button onClick={() => setNumber(number - 1)}> Decrement </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
            <HtmlSh text="<button onClick={() => setNumber(0)}> Reset </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
    &nbsp;&nbsp;   &#125;) <br/>
    
    
         &nbsp;&nbsp;export default Count
    
                    </div>
                }
                />
            }
        ]
    }
]

export const AiLinks = [
    {
        name:"Ai",
        text: "Intro to code with Ai",
        dropdowns: [
            {
                text: "Intro",
                id: 1,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Make coding easier with Ai</h1>
                    <p className="text-[18px]">In recent years Ai has become more and more intelligent, and though it cannont replace a coder
                    it can greatly reduce the time spent on a project and help with certain difficult tasks. The Ai we are going to use is Chat Gpt.
                    The main programming languages we are going to focus on are Solidity and Python, so it is recommended to finish at least one of those courses 
                    before proceeding. The reason we are not going to include much of other languages is that this Ai isn't yet good enough to handle
                    difficult tasks in Javascript and React.
                    </p>
                </div>
            },
            {
                text: "Calculator",
                id: 2,
                content: <iframe width="1020" height="630" src="https://www.youtube.com/embed/4vatZXtnNSY?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },
            {
                text: "Simple Wallet",
                id: 3,
                content: <iframe width="1020" height="630" src="https://www.youtube.com/embed/ITFnfno8SXA?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },
            {
                text: "More advanced wallet",
                id: 4,
                content: <iframe width="1020" height="630" src="https://www.youtube.com/embed/OXZcmJoQFd0?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            }
        ]
    }
]

export const JavascriptLinks = [
    {
        name: "Intro to Javascript",
        text: "Intro to Javascript",
        dropdowns: [
            {
                text: "What is Javascript",
                id: 1,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Welcome to our Javascript course!</h1>
                    <p className="text-[18px]">The third language you will be learning, if you're going in order that is, is Javascript. 
                    It is far more complex that HTML or Css but it is incredibly useful. This language will turn your web pages into web apps.

                    </p>
                </div>
            }
        ]
    },
    {
        name: "Variables",
        text: "Variables",
        dropdowns: [
            {
                text: "Intro to variables",
                id: 2,
                content: <div>
                      <h1 className="text-[30px] mb-[15px]">Variables</h1>
                    <p className="text-[18px]"> Variables

                    </p>
                </div>
            }
        ]
    }
]

export const PythonLinks = [
    {
        name: "Intro to Python",
        text: "Intro to Python",
        dropdowns: [
            {
                text: "What is Python",
                id: 1,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Welcome to our Python course!</h1>
                    <p className="text-[18px]">This is course</p>
                </div>
            }
        ]
    }
]

export const ProjectLinks = [
    {
        name: "About this course",
        text: "About this course",
        dropdowns: [
            {
                text: "About this course",
                id: 1,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Welcome to this course</h1>
                    <p className="text-[18px]">Unilike some of our other courses this is not a begginner course,
                    as we will be creating projects combining most of the languages and technologies that we have learned so far such as Javascript, 
                    React, Html, Solidity. You don't necessarily have to finish all those courses but you should be familiar with most of the 
                    languages above. And without further adue, let's begin!
                    </p>
                </div>
            }
        ]
    }
]

export const RusSolLinks = [
    {
        name: "Интро",
        text: "Интро",
        dropdowns: [
            {
                name: "Интро",
                text: "Интро",
                id: 1, 
                content: <div className="ml-[60px]">
                    <h1 className="text-[30px] mb-5">Добро пожаловать на на курс по Solidity</h1>
                    <p className="text-[18px] max-w-[800px] leading-[30px]">Здесь вы научитесь писать смарт-контракты,
                     понимать и использовать большинство концепций блокчейна, а также интегрировать их в свои React приложения. 
                     Если вы закончили другие наши курсы до этого (HTML, CSS, Javascript и React.js), то поздравляем, 
                     вы дошли до этого места. Если вы начинаете обучение в HUB с этого курса, это тоже нормально, 
                     так как вам не обязательно знать эти языки, чтобы изучать Solidity.

И без лишних слов давайте начнем наше путешествие по миру Blockchain. </p>
                </div>  
            },
            {
                name: "Содержание",
                text: "Содержание",
                id: 2,
                content: <div className="ml-[60px]">
                <h1 className="text-[30px] mb-[30px]">Here is a list of what you will learn throughout this course:</h1>
                <ul className="text-[18px] leading-[30px] ml-[15px]">
                    <li>Learn the basics of Solidity and blockchain</li>
                    <li>Create simple and advance smart contracts</li>
                    <li>Learn how crypto currencies work and how to work with them</li>
                    <li>Create nfts and other tokens</li>
                    <li>Use other smart contracts as a baseline for your project</li>
                    <li>Integrate smart contracts into yjavascript or React applications</li>
                </ul>
                </div>
            }
        ]
    }, {
        name: "Сетап",
        text: "Сетап",
        dropdowns: [
            {
                name: "VsCode",
                text: "Vs Code and node Js",
                id: 3,
                 
            },
            {
                name: "Remix IDE installation",
                text: "Remix IDE",
                id:4,
                content: <div>
<iframe width="1020" height="630" src="https://www.youtube.com/embed/uFa3IQcA2KM?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            },
            {
                name: "Remix explained",
                text: "Remix explained",
                id: 5,
                content: <div>
                   <iframe width="1020" height="630" src="https://www.youtube.com/embed/lPNoACSzV-o?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            }
        ]
    }, 
    {
        name: "Контракты",
        text: "Контракты",
        dropdowns: [
            {
                name: "Intro to contracts",
                text: "Intro to contracts",
                id:6,
                content: 
                <div className="">
              
<iframe width="1020" height="630" src="https://www.youtube.com/embed/sd7z1V6MuzM?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
                
                 
            },
            {
                name: "Second",
                text: "Second",
                id:7,
                
            },
            {
                name: "Смарт Контракты",
                text: "Смарт Контракты",
                id:8,
                content: 
                <div>
                    <h1 className="text-[30px] mb-[20px]">Смарт Контракты</h1>
                    <p className="text-[18px]">Пока вы изучаете основы Solidity, у вас будет два типа контента: видео и текст.
                          Текстовые элементы будут служить резюме или более подробными сведениями для видео, чтобы, если вы что-то забыли, вы могли быстро это найти.
                         
                         <br/> <br/> Смарт-контракты — это единственное место, где вы можете писать код в солидити. Они чем-то похожи на функциональные компоненты React. Они записываются с помощью ключевого слова <strong>contract</strong>, за которым следует имя, которое вы ему даете,
                         которое всегда должно начинаться с большой буквы. после этого вы используете фигурные скобки и пишете свой код внутри них.


                         </p>
                </div>
               
            }
        ]
    }, 
    {
        name: "Переменные",
        text: "Переменные",
        dropdowns: [
            {
                name: "Интро к переменным",
                text: "Интро к переменным",
                id: 9,
                content: 
                <div >
                <iframe className="" width="1020" height="630" src="https://www.youtube.com/embed/BdzzcktIG0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe></div>
            },
            {
                name: "Переменные",
                text: "Переменные",
                id: 10,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Переменные</h1>
                    
                    <p className="text-[18px]">В отличие от других языков, таких как Javascript, в Solidity статическая типизация,
                     это означает, что если вы выбрали, чтобы ваша переменная содерала число, она может содержать только числа и не может иметь строку или другой тип. Есть 4 типа, которые мы будем использовать сейчас, однако есть и другие, о которых мы поговорим позже. <br/>
                     <ul className="mt-7 мл-2">
                         <li>Uint — положительные целые числа или 0</li>
                         <li>Int – любое целое число.</li>
                         <li>string — строки любого типа (например, текст)</li>
                         <li>bool — правда или не правда (true or false)</li>
                     </ul> <br/>
                     Вот пример их объявления:
                     </p>
                     <img className="my-5" src={variable1} alt="variable"/>

                     <p className="text-[18px]">В отличие от других языков, таких значений, как <em>undefined</em> или <em>Null</em>, не существует.
                     Если переменной не было присвоено значение, она будет иметь значение по умолчанию. Для uint или int это 0. Для строк это
                     пустая строка: " ", для булевых значений это false.
                     </p>

                     <p className="text-[18px]">Еще один аспект, на который стоит обратить внимание, вам нужно выбрать видимость public для вашей переменной.
                     чтобы вы могли видеть его в меню deploy.
                     </p>

                    <img className="my-5" src={variable2} alt="variable"/>
                </div>
            }, 
            {
                name: "Задание 1",
                text: "Задание 1",
                id: 11,
                content: <div>
                    <ChallengeCard 
                    num="1"
                    text="Добро пожаловать на ваше первое задание. Попробуйте завершить его и проверьте решение.
                    Вашей первой задачей будет создание переменной firstNumber с видимостью public, типом uint (0 или положительное целое число).
                    "
                    solution={<div className="ml-5">
                        uint public firstNumber;
                        </div>
                        }
                    />
                </div>
            },
            {
                text: "Задание 2",
                id: 12,
                content: <ChallengeCard 
                num="2"
                text="Создайте переменную myName с видимостью public, и присвойте ей строковое значение."
                solution={
                    <div className="ml-5">
                        string public myName = "HUB";
                    </div>
                }
                />
            },
            {
                text: "Задание 3",
                id: 13,
                content: <ChallengeCard 
                num="3"
                text="Каким будет значение по умолчанию для этой переменной?"
                challenge={
                    <div className="ml-5">
                        bool public thisBool;
                        </div>
                }
                solution={
                    <div className="ml-5">false</div>
                }
                />
            },
            {
                name: "Глобальные и Локальные Переменные",
                text: "Глобальные и Локальные Переменные",
                id: 14,
                content: <div className="max-w-[800px]">
                    <h1 className="text-[30px] mb-[20px]">Глобальные и Локальные Переменные</h1>
                    <p className="text-[18px] mb-8">В Solidity и других языках, таких как javascript, 
                    есть концепция видимости, означающая, что некоторые переменные можно видеть и использовать во всем коде а 
                    другие нет.
                     Переменные, объявленные в контракте и вне каких-либо функций, называются глобальными переменными 
                     и могут использоваться в любой части вашего смарт-контракта. Однако переменные, объявленные внутри функции, 
                     могут использоваться только внутри этой функции. По сути, они создаются каждый раз,
                      когда эта функция запускается, и удаляются после выполнения всех инструкций, сущетвуя только во время работы функции.
                    </p>
                    <img src={variable3} alt="variable3"/>
                </div>
            },
            {
                text: "Задание 4",
                id: 15,
                content: <ChallengeCard
                num="4"
                text="Cделайте локальную переменную num в глобальной с видимостью public."
                challenge={
                    <div>
                       &nbsp; contract Vars = &#123; <br/> <br/>

                        &nbsp; function local (params) public &#123; <br/>
                    &nbsp;&nbsp;&nbsp; uint num = 5; <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>
                    &nbsp;   &#125;
                    </div>
                }
                solution={
                    <div className="bg-[#BCCFCF] rounded-[10px]">
                        &nbsp; contract Vars = &#123; <br/> <br/>
                        &nbsp; uint public num = 5;  <br/> <br/>
                        &nbsp; function local () public &#123; <br/>
                   
                            
                        &nbsp; &nbsp; &#125;<br/> <br/>
                    &nbsp; &#125;
                    </div>
                }
                />
            }
        ]
    },
    {
        name: "Функции",
        text: "Функции",
        dropdowns: [
            {

                text: "Интро к Функциям",
                id: 16,
                content: <div>
                    
<iframe width="1020" height="630" src="https://www.youtube.com/embed/5v8EMIVxlb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>

                </div>
            },

            {
  
                text: "Структура Функций",
                id: 17,
                content: 
                <div>
                   <h1 className="text-[30px] mb-[15px]">Функции</h1>
                     <p className="text-[18px] max-w-[800px]">Функции являются ключевыми частями языка Solidity, что схоже со многими другими языками.
                         Причина в том, что Solidity — это очень новый язык, вобравший в себя элементы и сходство с другими более старыми языками.
                         как С++ и JavaScript.<br/> <br/> Существует только один способ создать функцию
                         и это с ключевым словом <em>function</em>. Затем мы даем ему имя. После этого идуь скобки, в которые мы можем вставить параметры (они будут рассмотрены позже).
                         наконец, необходимо придать ему тип видимости. Самый распространенный — public, и мы будем использовать его на протяжении большей части этого курса.
                         Наконец, мы открываем фигурные скобки, в которых пишем наш код.
                     </p>
                     <img className="my-8" src={function1} alt="function1"/>
                     <p className="text-[18px] max-w-[800px]">
                         Еще одна вещь, которую вы должны знать, это то, как стоит называть свои контракты и функции. Во-первых, нельзя иметь пробелы в названии,
                         если имя состоит из нескольких слов, то следующее слово должно начинаться с заглавной буквы. Имена контрактов должны начинаться с заглавной буквы, а функция
                         и имена переменных начинаются с маленькой и следуют тем же принципам. Это продемонстрировано на изображении выше. <br/> <br/>
                         Это неправильно: My_Contract, my.function.
                         Это правильно: MyContract, myFunction.
                     </p>
                </div>
            }, 
            {
                text: "Заданиe 5",
                id:18,
                content: <ChallengeCard 
                num="5"
                text= "Создайте функцию c названием sum и видимостью public."
                challenge={
                    <div>
                        &nbsp; contract Vars = &#123; <br/> <br/>

                         &nbsp; &#125;
                    </div>
                }
                solution={
                    <div>
                    &nbsp; contract Vars = &#123; <br/> <br/>

                    &nbsp; function sum() public &#123; <br/>
                   
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                />
            },
            {
                text: "Интро к параметрам",
                id: 19,
                content: <div>
                <iframe width="1020" height="630" src="https://www.youtube.com/embed/0teNspVBHkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            },
            {

                text: "Параметры",
                id: 20,
                content: <div className="max-w-[800px]">
                   <h1 className="text-[30px] mb-[15px]">Параметры в функциях</h1>
                     <p className="text-[18px] "> Часто мы хотим, чтобы наши функции выполняли разные действия в зависимости от того, какое значение вводит пользователь.
                     Для этого у нас есть параметры. Параметры заключаются в скобки функций и очень похожи на локальные переменные. Единственная разница в том, что
                     что их значение определяется пользователем. Неплохой пример калькулятор, который мы будем создавать в следущем разделе.
                     </p>
                     <img className="my-8" src={function2} alt="function2" />
                     <p className="text-[18px]">Здесь значение глобальной переменной меняется в зависимости от того, что пользователь вводит в функцию. В нашем случае это делается через меню deploy</p>

                     <img className="my-8" src={function3} alt="function3" />
                </div>
            },
            {
                text: "Заданиe 6",
                id: 21,
                content: <ChallengeCard 
                num="6"
                text="Присвойте значение переменной myBool через функцию и ее параметр (вам нужно его создать). Оператор для присваивания: =."
                challenge={
                    <div>
                    &nbsp; contract Vars = &#123; <br/> <br/>

                    &nbsp; bool public myBool; <br/> <br/>

                    &nbsp; function asign() public &#123; <br/> <br/>
                   
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                solution={
                    <div>
                    &nbsp; contract Vars = &#123; <br/> <br/>

                    &nbsp; bool public myBool; <br/> <br/>

                    &nbsp; function asign(bool _myBool) public &#123; <br/> <br/>
                   
                    &nbsp;&nbsp;  myBool = _myBool; <br/> <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                />
            },
            {
                text: "Задание 7",
                id: 22,
                content: <div>
                    <ChallengeCard  num="7" text="Исправьте ошибки в этом контракте." challenge={
                         <div className="bg-[#BCCFCF] rounded-[10px]">
                          <p className="p-5">

                    
                    contract Calculator &#123; <br/> <br/>
                    uint public myNum <br/> <br/>  

                    function sum(uint public _num1, uint public _num2) public  &#123; <br/>
                    &nbsp;&nbsp;&nbsp;  myNum = _num1 + _num2;<br/>
                    &nbsp; &#125;<br/><br/>
                    
                    &#125;
                    
                     </p>
                    </div>}
                        solution={
                            <div className="bg-[#BCCFCF] rounded-[10px]">
                            <p className="p-5"> 
         &nbsp; contract Calculator &#123; <br/> <br/>
        
        &nbsp; uint public myNum;  <br/> <br/>  

        function sum(int _num1, int _num2) public  &#123; <br/>
        &nbsp;&nbsp;&nbsp; myNum = _num1 + _num2;<br/>
        &nbsp; &#125;<br/><br/>
        
        &#125;
        
        
        
                            </p>
                            </div>}
                    />
                </div>
            },
            {
                text: "Операторы",
                id: 23,
                content: <div>
                  <h1 className="text-[30px] mb-[15px]">Математические и другие операторы</h1>
                     <p className="text-[18px]">Сначала мы начнем с математических операторов.
                       
                     </p>
                     <ul className="text-[18px] my-5 bg-[#BCCFCF] rounded-[10px]">
                         <div className="ml-2">
                             <li>Плюс – это +</li>
                             <li>Минус -</li>
                             <li>Умножение равно *</li>
                             <li>Раздел /</li>
                             <li>Назначение мощности **</li>
                             <li>Больше, чем есть &gt;</li>
                             <li>Меньше, чем &#60;</li>
                             <li>Меньше или равно/больше или равно: &#60;=/&gt;=</li>
                             </div>
                         </ul>
                      <p className="text-[18px]">Как видите, они очень похожи на то, что мы обычно используем. Теперь об операторах сравнения. Операторы сравнения
                         почти всегда используются в условиях if, если вы изучили javascript, то вы знакомы с ними. В любом случае их мы скоро пройдем.
                      </p>
                      <ul className="text-[18px] my-5 bg-[#BCCFCF] rounded-[10px]">
                         <div className="ml-2">
                         <li>Равно - == (помните, что один знак р "=" используется для присвоения значения, а не для его проверки)</li>
                         <li>Не - !</li>
                         <li>Не равно - !=</li>
                         <li>Или - ||</li>
                         <li>И - &&</li>
                         </div>
                      </ul>
                        <p className="text-[18px]">Это основные операторы, которые мы будем использовать. Подробнее о том, как их использовать, мы поговорим в разделе операторов if.</p>
                </div>
            },
            {
                text: "Задание 8",
                id: 24,
                content: <ChallengeCard 
                num="8"
                text="Создайте функцию, которая скадывает два параметра и сохраняет результат в глобальной переменной."
                challenge={
                    <div>
                    &nbsp; contract Demo = &#123; <br/> <br/>



                     &nbsp; &#125;
                </div>
                }
                solution={
                    <div>
                    &nbsp; contract Demo = &#123; <br/> <br/>

                    &nbsp; uint public finalNum; <br/> <br/>

                    &nbsp; function addition(uint _num1, uint _num2, uint _num3) public &#123; <br/> <br/>
                   
                    &nbsp; &nbsp;  finalNum = _num1 + _num2 + _num3; <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                />
            },
            {
                text: "View/return Функции",
                id: 25,
                content: <div>

                </div>
            },
            {
                text: "View/return Функции 2",
                id: 26,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">View, pure and return functions</h1>
                    <p className="text-[18px]">Sometimes we don't want a certain function to modify anything, but to return something to the user.
                    In these situations view/pure return functions come in use.
                    </p>
                </div>
            },
            {
                text: "Задание 9",
                id: 27,
                content: <ChallengeCard 
                num="9"
                text="Change this function to return the sum instead of asigning it to a variable."
                challenge={
                    <div>
                    &nbsp; contract Demo = &#123; <br/> <br/>

                    &nbsp; uint public finalNum; <br/> <br/>

                    &nbsp; function addition(uint _num1, uint _num2, uint _num3) public &#123; <br/> <br/>
                   
                    &nbsp; &nbsp;  finalNum = _num1 + _num2 + _num3; <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div>
                }
                solution={
                    <div>
                    &nbsp; contract Demo = &#123; <br/> <br/>

                    &nbsp; function addition(uint _num1, uint _num2, uint _num3) public view returns(uint) &#123; <br/> <br/>
                   
                    &nbsp; &nbsp;  return _num1 + _num2 + _num3; <br/>
                            
                    &nbsp; &nbsp; &#125;<br/> <br/>

                     &nbsp; &#125;
                </div> 
                }
                />
            }
        ]
    }, 
    {

        text: "Проект 1",
        dropdowns: [
            {
                text: "Инструкция Проекта",
                id: 28,
                content: <div className="max-w-[800px]">
                   <h1 className="text-[30px] mb-[15px]">Калькулятор</h1>
                     <p className="text-[18px] mb-8">На данный момент вы достаточно изучили язык Solidity, чтобы сделать свой первый проект.
                         Ваша цель - сделать калькулятор, состоящий из четырех функций (сложение, вычитание, деление, умножение).
                         Он должен иметь возможность выполнять эти операции с двумя числами, то есть каждая функция должна иметь два параметра.
                         Также вы должны пометить свои функции как чистые (как показано на изображении ниже), это указывает на то, что ваша функция не использует и не модифицирует
                         любые внешние переменные или функции.
                         
                     </p>
                     <img src={project1} alt="project1" />
                     <p className="text-[18px]">На следущей странице вы можете увидеть окончательный результат.
                         <br/> Удачи!
                      </p>
                </div>
            }, 
            {
                text: "Готовый Проект",
                id: 29,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Project Code</h1>
                    <p className="text-[18px] mb-8">If your project looks something like this, then congratulations on completing your first Solidity project.
                     Things will only get more interesting from now!</p>
                    <div className="bg-[#BCCFCF] rounded-[10px]">
                    <p className="p-5">
// SPDX-Lecense-Indentifier: MIT <br/>
pragma solidity ^0.8.0; <br/> <br/>

contract Calculator &#123; <br/> <br/>

function sum(int _num1, int _num2) public pure returns (int) &#123; <br/>
&nbsp;&nbsp;&nbsp;  return _num1 + _num2;<br/>
    &#125;<br/><br/>

function sub(int _num1, int _num2) public pure returns (int) &#123; <br/>
&nbsp;&nbsp;&nbsp;  return _num1 - _num2; <br/>
    &#125;<br/><br/>

function mult(int _num1, int _num2) public pure returns (int) &#123;<br/>
&nbsp;&nbsp;&nbsp;  return _num1 * _num2;<br/>
    &#125;<br/><br/>

function dev(int _num1, int _num2) public pure returns (int) &#123;<br/>
&nbsp;&nbsp;&nbsp;  return _num1 / _num2;<br/>
    &#125;<br/><br/>

&#125;



                    </p>
                    </div>
                </div>
            }
        ]
    },
    {
        name: "Адреса",
        text: "Адреса",
        dropdowns: [
            {
                text: "Интро к адресам",
                id:32,
                content:<iframe width="940" height="630" src="https://www.youtube.com/embed/OYJ4NDO4c0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },
            {
                text: "Aдреса",
                id: 33,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Адреса</h1>
                     <p className="text-[20px]">Адреса — это тип данных, уникальный для Solidity. Причина в том, что Solidity была создана для блокчейна Эфириума.
                         Прежде всего, что такое адреса? Так же, как у вас есть адрес электронной почты, крипто-кошелек также имеет адрес. Эти адреса начинаются с 0x, за которыми следуют 40 символов, например
                          0xa80F2D0038D36a9F7452D44F0773c6Bf333F0De5. Все действия в смарт-контракте Solidity можно совершать только при подключении к кошельку ethereum. <br/> <br/> Причина, по которой вы этого не знали, в том, что
                          Ремикс уже смоделировал это. Если вы перейдете в меню развертывания, вверху вы увидите раздел Аккаунты. Если вы нажмете на него, вы увидите список адресов эфириума,
                          каждый с балансом 100 ether. Очевидно, что это не настоящие адреса и не настоящий эфир, но они используются в целях тестирования и работают точно так же, как обычные акаунты ethereum.

                          <img src={deploy} alt="deploy" className="h-[30%] w-[30%] mb-3"/>

                             Теперь, когда мы закончили с общей теорией, давайте посмотрим, как работать с адресами. Чтобы создать переменную с типом адрес, мы следуем тем же принципам, что и раньше.

                             <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                                 address pubic myAddress;
                             </div>

                             Во-первых, давайте вручную назначим адрес нашей переменной.
                             <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                                 address public myAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
                             </div>
                            
                             Важная часть кошельков ethereum — это их баланс (количество эфира, которое хранится на них). Чтобы увидеть баланс счета, мы пишем .balance после адреса.

                             <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                             function getBalance() public view returns (uint) &#123; <br/>
                             return myAddress.balance;
                                  <br/>
                         &nbsp; &#125; <br/>
              
                             </div>
                             Используя .balance, мы можем увидеть баланс любого существующего кошелька ethereum, потому что вся информация, хранящаяся в блокчейне, является открытой. <br/>
                            
                          </p>
                </div>
            },
            {
                text: "Задание 11",
                id: 34,
                content: <ChallengeCard 
                num="11"
                text="Добавьте в эту функцию аргумент типа address и верните его баланс через функцию."
                challenge={<div className="p-2">
                    contract Address &#123; <br/>
                    function getBalance () public &#123; <br/>
                        
                    &#125; <br/>
                    &#125;
                </div>}
                solution={<div className="p-2">
                contract Address &#123; <br/>
                function getBalance (address _address) public view returns (uint) &#123; <br/>
                    return _address.balance;
                &#125; <br/>
                &#125;
            </div>}
                />
            },
            {
                text: "Работы с ефиром",
                id: 35,
                content: <iframe width="940" height="630" src="https://www.youtube.com/embed/ERuck8BCdk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },
            {
                text: "Получение ефира",
                id: 36,
                content: <div>
                     <h1 className="text-[30px] mb-[15px]">Получение ефира</h1>
                     <p className="text-[20px]">Давайте создадим контракт, который позволит нам переводить средства в контракт и из него. Создайте новый файл и контракт
                     в Remix и создайте в нем функцию getBalance(), которая будет возвращать текущий баланс контракта.
                     <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                 contract Funds &#123; <br/>
                 function getBalance() public view returns (uint) &#123; <br/>
                     return address(this).balance; <br/>
                 &#125; <br/>
                 &#125;
             </div>

             Это функция, которую жалательно запомнить, так как это, вероятно, самая используемая функция во всем Solidity. Давайте пройдемся по внутренностям этой функции.
             Ключевое слово «this» означает этот контракт, и, говоря address (this), мы указываем на адрес этого контракта. Да, как и у кошельков, у контрактов Solidity тоже есть свои
             адреса и методы, такие как .balance и .transfer, также работают с ними. <br/> <br/>

             Теперь добавим часть, отвечающую за получение денег. Чтобы функция могла получать эфир, она должна быть помечена как подлежащая оплате.
             <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                     // SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0,8,0; <br/><br/>
               
                 Contract Funds &#123; <br/>
                uint public fundsReceive; <br/> <br/>

                 function receiveFunds() public payable &#123; <br/>
                     fundReceived += msg.value; <br/>
                 &#125; <br/> <br/>


                 function getBalance() public view returns (uint) &#123; <br/>
                     обратный адрес(этот).баланс; <br/>
                 &#125; <br/>
                 &#125;
             </div>

             Как видите, мы пометили функцию receiveFunds как payable (рядом с public), это все, что требуется для получения эфира через функцию.
             Мы также создали переменную, которая хранит количество полученного эфира (она не хранит свм эфир, а просто число).
             Msg.value — это количество эфира, которое было получено функцией во время этой транзакции. <br/> <br/>

             Чтобы отправить деньги на контракт в Remix, перейдите в меню deploy, разверните свой контракт, перейдите в раздел «Value», введите любое число и нажмите «receiveFunds».
             Убедитесь, что ваша транзакция прошла успешно, нажав getBalance и посмотрев, является ли баланс больше 0.

            

                     </p>
                   
                </div>
            },
            {
                text: "Вывод ефира",
                id: 37,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Вывод ефира</h1>
                    <p className="text-[20px]">Вы узнали, как перевести эфир на контракт, теперь давайте рассмотрим, как его вывести.
                     Создадим функцию для вывода баланса контракта тому, кто вызвал функцию.

                    <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                function withdraw () public  &#123; <br/>
                address payable receiver = payable(msg.sender);<br/>
                 receiver.transfer(getBalance());
                     <br/>
                &#125; <br/>
                    </div>
                    Прежде всего, мы создаем локальную переменную receiver и помечаем ее как payable, так как на этот адрес будет поступать эфир. Мы присваиваем ему значение msg.sender,
                     тоисть, адрес человек который вызвал функцию, а также пометить ее как payable. Наконец, мы используем метод .transfer для переменной receiver. Внутри скобок мы
                     указываем, сколько мы хотим перевести, поэтому мы вызываем функцию getBalance, которая дает нам баланс контракта. Вот как должен выглядеть полный контракт.

                    <div className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    // SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>
               
                contract Funds &#123; <br/>
                uint public fundsReceived; <br/> <br/>

                function receiveFunds () public payable &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>


                function getBalance () public view returns (uint) &#123; <br/>
                    return address(this).balance; <br/>
                &#125; <br/>

                function withdraw () public  &#123; <br/>
                address payable receiver = payable(msg.sender);<br/>
                 receiver.transfer(getBalance());
                     <br/>
                &#125; <br/>
                
                &#125;
            </div>

            А теперь проверьте это самостоятельно в Remix. Отправьте немного эфира на контракт, как описано ранее, и выведите его на любой адрес.
                    </p>

                  
                </div>
            },
            {
                text: "Задание 12",
                id:38,
                content: <ChallengeCard 
                num="12"
                text="Эта функция предназначена для получения денег. Измените ее любым необходимым способом, чтобы она правильно работала."
                challenge={<div className="p-2"> 
                    function receiveFunds () public view returns (uint) &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>
                </div>}
                solution={<div>
                    function receiveFunds () public payable &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>
                </div>}
                />
            },
            {
                text: "Задание 13",
                id:39,
                content: <ChallengeCard 
                num="13"
                text="Создайте функцию, которая переводит баланс контракта на адрес, переданный через аргументы."
                challenge={<div className="p-2">
                      // SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>
               
                contract Funds &#123; <br/>
                uint public fundsReceived; <br/> <br/>

                function receiveFunds () public payable &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>


                function getBalance () public view returns (uint) &#123; <br/>
                    return address(this).balance; <br/>
                &#125; <br/>

                
                &#125;
                </div>}
                solution={<div>
  // SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>
               
                contract Funds &#123; <br/>
                uint public fundsReceived; <br/> <br/>

                function receiveFunds () public payable &#123; <br/>
                    fundsReceived += msg.value; <br/>
                &#125; <br/> <br/>


                function getBalance () public view returns (uint) &#123; <br/>
                    return address(this).balance; <br/>
                &#125; <br/>

                function sendFunds (address payable _addr) public  &#123; <br/>
                 _addr.transfer(getBalance());
                     <br/>
                &#125; <br/>
                
                &#125;
                </div>}
                />
            },
        ]
    },
    {
        name: "Сложные типы",
        text: "Сложные типы",
        dropdowns: [
            {
            text: "Mapping intro", 
            id: 40,
            content: <div><iframe width="940" height="630" src="https://www.youtube.com/embed/DQhmk9jbKvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        },
        {
            text: "Сопоставления",
            id: 41,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">Сопоставления</h1>
               <p className="text-[20px]"> Раньше мы рассматривали только переменные как способ хранения данных, но есть и много других. Одним из таких способов являются сопоставления.
                Сопоставления хранят свои данные в виде пар ключ/значение. Это означает, что для каждого ключа есть значение. Например, мы хотим хранить имена и возраст людей.
                 Для каждого имени (ключ) будет возраст (значение). Вот как это будет выглядеть в Solidity: <br/> <br/>

            <div  className="bg-[#BCCFCF] rounded-[10px] p-2 mb-2">
                mapping (string =&gt; uint) public myMapping;
            </div>

            Внутри скобок мы выбрали типы данных для нашей пары ключ/значение со «стрелкой» между ними, здесь мы выбрали строку в качестве ключа и положительное целое число в качестве значения.
              Это можно использовать в приведенном выше примере с парами имя-возраст. <br/> <br/>

             Есть некоторые ограничения на то, что может быть ключом. Любой простой тип данных: uint, int, bool, string, address, byte может быть ключом, но другие сопоставления или сложные типы, которые мы рассмотрим
             в этом разделе не могут быть ключами. <br/> <br/>


             Однако значения могут быть любыми, то есть наряду с простыми типами данных они также могут быть сопоставлениями, структурами и другими сложными типами. <br/> <br/>

             Теперь давайте посмотрим, как назначать пары ключ/значение через функции: <br/> <br/>

              <div  className="bg-[#BCCFCF] rounded-[10px] p-2 mb-2">
              // SPDX-License-Identifier: GPL-3.0 <br/>
                pragma solidity ^0.8.0; <br/> <br/>
                contract myMappings &#123; <br/> <br/>
                    mapping (address =&gt; bool) public myMapping; <br/> <br/>

                    function assign () public &#123; <br/>
                        myMapping [msg.sender] = true; <br/>
                        &nbsp; &#125; <br/> 
                &#125; <br/>
            </div>

            В этом примере мы назначаем адрес человека, который вызывает функцию, в качестве ключа и true в качестве значения. Как видите, мы обозначаем ключ в квадратных скобках,
             и значение через наш обычный оператор присваивания '='. Протестируйте этот контракт в Remix <br/> <br/>

             Поскольку вы пометили сопоставление как public, вы сможете увидеть его в меню развертывания в Remix. В строке рядом с насванием сопоставления (в меню deploy) вы можете ввести ключ, и он вернет значение.

               </p>
            </div>
          },
          {
            text: "Challenge 14",
            id: 42,
            content: <ChallengeCard 
            num="14"
            text="Create a mapping called addrMap with an address as a key and a string as a value."
            solution={ <div  className="bg-[#BCCFCF] rounded-[10px] p-2 mb-2">
            mapping (address =&gt; string) public addrMap;
        </div>}
            />
          },
          {
            text: "Challenge 15",
            id: 43,
            content: <ChallengeCard 
            num="15"
            text="Add a function to this contract that will add the address of the caller to the mapping as the key, and the persons name as the value. The name
            should be passed as an argument.
            
            "

            challenge={<div className="p-2">
                //SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>

contract MappingsNames &#123;<br/>
  mapping(uint =&gt; string) public addrMap; <br/><br/>

  &#125; <br/>
            </div>}
            solution={<div>
                //SPDX-License-Identifier: GPL-3.0 <br/>
pragma solidity ^0.8.0; <br/><br/>

contract MappingsNames &#123;<br/>
  mapping(uint =&gt; string) public addrMap; <br/><br/>

  function addPerson (string memory _name) public &#123;<br/>
    addrMap [msg.sender] = _name; <br/>
    &nbsp; &#125;<br/>

  &#125; <br/>
            </div>}
            />
          },
          {
            text: "Intro to arrays",
            id: 44,
            content: <div className=""><iframe width="940" height="630" src="https://www.youtube.com/embed/QRxaaEkWNAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          },
          {
            text: "Arrays",
            id: 45,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">Arrays</h1>
                <p className="text-[20px]">Another way to store data are arrays. An array is essentially a list of items of the same data type.
                Unlike in other languages you have to specify what type of data you are going to store in that array. So you can store only addresses, for example,
                or only numbers: 

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    uint [5] numbers = [1, 2, 3, 4, 5];
                </div>

                As you can see arrays are declared just like variables but with square brackets after the type. There are two main types of arrays, dynamic and static. Dynamic arrays are flexible and can
                hold a practically infinite amout of items. Static arrays can ony hold a specified amount of items. The example above is a static array. In the brackets we specified how many items are going to be in it.
     What should be noted is that these kinds of arrays always store five numbers, even if you didn't specify them.
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    uint [5] numbers = [1, 2, 3];
                </div>
                To the computer the numbers in the array above are actually [1 , 2 , 3 , 0 , 0]. <br/> <br/>

                For dynamic arrays we keep the first brackets empty, and usually don't specify any values:
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    uint [] numbers;
                </div>

                To add items to a dynamic array we use functions:
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

                contract Arrays &#123; <br/> <br/>
                uint [] numbers; <br/> <br/>

                    function assign () public &#123; <br/>
                        numbers.push(1); <br/>
                        numbers.push(2);
                         <br/>
                        &nbsp; &#125; <br/> 
                &#125; <br/>
            </div>
            However push cannot be used for static arrays. To do that we need to signify the index in the array in square brackets and asign a value.

            <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

                contract Arrays &#123; <br/> <br/>
                uint [2] public numbers; <br/> <br/>

                    function assign () public &#123; <br/>
                        numbers[0] = 1; <br/>
                        numbers[1] = 2;
                         <br/>
                        &nbsp; &#125; <br/> 
                &#125; <br/>
            </div>
            As you can see the first index that we used was the index 0. In arrays you start counting the index from 0 and not from 1. Index 1 is the second element,
            index 2 is the third, and so on.
                </p>
            </div>
          },
          
          {
            text: "Challenge 16",
            id: 46,
            content: <ChallengeCard
            num="16"
            text="Create a static array with type string and a length of three. Asign three names (strings) to the array."
            solution={<div>
                string [3] names = [John, Jack, Mary];
            </div>}
            />
          },
          {
            text: "Challenge 17",
            id: 47,
            content: <ChallengeCard 
            num="17"
            text="Create a function that allows you to add a new name to the names array through arguments."
            challenge={ <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

            contract NameList &#123; <br/> <br/>
            uint [] public names; <br/> <br/>

            &#125; <br/>
        </div>}
        solution={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

        contract NameList &#123; <br/> <br/>
        uint [] public names; <br/> <br/>

        function addName (string memory _name) public &#123; <br/>
            names.push(_name);
                 <br/>
                &nbsp; &#125; <br/> 
        &#125; <br/>
    </div>}
            />
          },
          {
            text: "Challenge 18",
            id:48,
            content: <ChallengeCard 
            num="18"
            text="Add a function that replaces an element in the array. There should be two arguments: the index that is going to be replaced and the new element."
            challenge={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

            contract NameList &#123; <br/> <br/>
            uint [] public names; <br/> <br/>
    
            function addName (string memory _name) public &#123; <br/>
                names.push(_name);
                     <br/>
                    &nbsp; &#125; <br/> 
            &#125; <br/>
        </div>}
        solution={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

        contract NameList &#123; <br/> <br/>
        uint [] public names; <br/> <br/>

        function addName (string memory _name) public &#123; <br/>
            names.push(_name)
                 <br/>
                &nbsp; &#125; <br/> <br/>

                function replaceName (uint _idx, string memory _name) public &#123; <br/>
            names [_idx] = _name;
                 <br/>
                &nbsp; &#125; <br/>

        &#125; <br/>
    </div>}
            />
          },
          {
            text:"Array operations",
            id: 49,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">Array operations</h1>
                <p className="text-[20px]">In the previous lesson you learned the basics of arrays, however there are more things you can do with them that you should know.
                First of all, the pop method, this only works on dynamic arrays and allows you to remove the last element of the array. 

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

contract Arrays &#123; <br/> <br/>
uint [] numbers = [1, 2, 3, 4]; <br/> <br/>

    function pop () public &#123; <br/>
            numbers.pop();  
         <br/>
        &nbsp; &#125; <br/> 
&#125; <br/>
</div>
            This will make the array [1, 2, 3]. <br/> <br/>
Quite often it is useful to know the amount of elements in an array, a.k.a it's length. This is how you can use it: 
<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

contract Arrays &#123; <br/> <br/>
uint [] numbers = [1, 2, 3, 4]; <br/> <br/>

    function pop () public &#123; <br/>
            numbers.pop();  
         <br/>
        &nbsp; &#125; <br/> <br/>

    function seeLength () public view returns (uint) &#123; <br/>
        return numbers.length;<br/>
        &nbsp; &#125; <br/>  <br/>
&#125; <br/>
</div>

        If you deploy the contract above, click pop and the click seeLength, you will get 3. <br/> <br/>

        Another thing you can do is return arrays through functions. However just like with strings you have to signify memory after the type:
        <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

contract Arrays &#123; <br/> <br/>
uint [] numbers = [1, 2, 3, 4]; <br/> <br/>

    function pop () public view returns (uint[] memory) &#123; <br/>
            return numbers;
         <br/>
        &nbsp; &#125; <br/> 
&#125; <br/>
</div>
                </p>

            </div>
          },
         
          {
            text: "Challenge 19",
            id:50,
            content: <ChallengeCard 
            num="19"
            text="This challenge will be bigger than most.
             Inside this contract add three functions, one to add new addresses, one to remove the final element, and one to see the length of the array."
             challenge={<div className="p-2">
                contract Arrays &#123; <br/> <br/>
                uint [] numbers addresses; <br/> <br/>
                &#125;
             </div>}
             solution={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">

             contract Arrays &#123; <br/> <br/>
             uint [] numbers addresses; <br/> <br/>

                function addAddress (address _newAddress) public &#123; <br/>
                    addresses.push (_newAddress) <br/>
                &#125; <br/> <br/>
             
                 function pop () public &#123; <br/>
                         addresses.pop();  
                      <br/>
                     &nbsp; &#125; <br/> <br/>
             
                 function seeLength () public view returns (uint) &#123; <br/>
                     return addresses.length;<br/>
                     &nbsp; &#125; <br/>  <br/>
             &#125; <br/>
             </div>}
            />
          },
          
          

          {
            text: "Enum",
            id: 51,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">Enums</h1>
                <p className="text-[20px]">Of the four complex types explained in this section, this one is the least used, but still worth knowing.
                Enums are use to show different states of something. This is how they are made:
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2"> 
                enum WaterStatus &#123; Solid, Liquid, Gas &#125;
                </div>

                In the example above we created a new type which only has three possible values: Solid, Liquid and Gas. A single one of these is called an enum.
                For a single type we can have up to 255 enums. We can asign the type that we just created to variable, instead of asigning them a type like uint or string.
                So, let's create a variable like that.

               

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2"> 
                contract Enums &#123; <br/>
                enum WaterStatus &#123; Solid, Liquid, Gas &#125; <br/> <br/>

                WaterStatus public currentstatus;   <br/>
                &#125;
                </div>
                Next we can asign the variable one of the three possible values:

                
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2"> 
                contract Enums &#123; <br/>
                enum WaterStatus &#123; Solid, Liquid, Gas &#125; <br/> <br/>

                WaterStatus public currentStatus;   <br/>

                function makeIce () public &#123; <br/>
                currentStatus = WaterStatus.Solid;
                 &#125;
                &#125;
                </div>
                </p>
                
            </div>
          },
          {
            text: "Challenge 20",
            id: 52,
            content: <ChallengeCard 
            num="20"
            text="Create an enum type called PurchaseStatus with four enums: Started, Paid, Delivered, Received. Then create a variable with
            the PurchaseStatus type.
            "
            solution={<div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2"> 
            contract Enums &#123; <br/>
            enum PurchaseStatus &#123;Started, Paid, Delivered, Received  &#125; <br/> <br/>

            PurchaseStatus public currentstatus;   <br/>
            &#125;
            </div>}
            />
          },
          {
           text: "Intro to structs",
            id: 53,
            content: <div>
<iframe width="940" height="630" src="https://www.youtube.com/embed/B2O01c3VIds?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          },
          {
            text: "Structs",
            id: 54,
            content: <div>
              <h1 className="text-[30px] mb-[15px]">Structs</h1>
                <p className="text-[20px]">Unlike other complex types, structs don't actually store data, they create a new type of data consisting of basic types. 
                For example, we have a person, and we want to store information about multiple people. However a person is something complex. A person has a name, an age, a nationality, a gender etc..
                A struct allows you to combine all that info and make it its own data type. Here is an example of a struct using the example above:

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    struct Person &#123; <br/>
                       &nbsp; string name; <br/>
                       &nbsp;  uint age;<br/>
                       &nbsp;  string nationality;<br/>
                       &nbsp;  string gender;<br/>
                    &#125;
                </div>
                As you can see this doesn't store any data, but it give us an idea of what a person is. Stucts are usually used inside arrays and mappings. Let's use the struct above in an array.

                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2">
                    Person [] public people;
                </div>

                In this example every single element of the array will contain information about a person. 
                But how do we actually add a new person through a function? This is the most readable way:
                <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-2 text-[18px]">
                    function addPerson (<br/>string memory _name, <br/> uint _age, <br/>sring memory _country, <br/>string memory gender) public &#123; <br/><br/>
                        Person memory person = Person(&#123;<br/>
                        &nbsp; name: _name, <br/>
                        &nbsp; age: _age, <br/>
                        &nbsp; nationality: _country, <br/>
                        &nbsp; gender: _gender <br/>
                        &#125;)<br/>
                        people.push(person); <br/>
                    &#125;
                </div>
                This looks quite complicated so let's look at it line by line. Firstly we asign four arguments to the function, 
                something you've already done plenty of times.
                Then we create a new variable, with the type Person, meaning this variable should hold a name, age, nationality and gender. The following 
                syntax on this line simply needs to be remembered, the name of the struct, normal brackets and then curly brackets. After that we asign an argument to its
                corresponding value in the struct. Finally we push the variable we just created into our people array. <br/> <br/>

               Structs can also be used as values in mappings. <br/> 

               <div  className="bg-[#BCCFCF] rounded-[10px] p-2 my-3">
                mapping (string =&gt; Person) public people;
               </div>

                Structs are some of the most difficult concepts to understand in Solidity, so don't worry if you don't memorize all of this on your first try.
                </p>
              
            </div>
          },
          {
            text: "Challenge 21",
            id: 55,
            content: <ChallengeCard
            num='21'
            text="Create a struct called User, with 3 parameters: address (ethereum address), name, age"
            solution={
                <div>
                    struct User &#123; <br/>
                    &nbsp; address userAddress;<br/>
                    &nbsp; string name;<br/>
                    &nbsp; uint age;<br/>
                    &#125;
                </div>
            }
            />
          },
          {
            text: "Challenge 22",
            id: 56,
            content: <ChallengeCard 
            num="22"
            text="Add a function through which you can add new users to the users array."
            challenge={<div className="p-2">
                &nbsp; contract Structs = &#123; <br/> <br/>

                struct User &#123; <br/>
                    &nbsp; address userAddress;<br/>
                    &nbsp; string name;<br/>
                    &nbsp; uint age;<br/>
                    &#125; <br/> <br/>

                User [] public users; <br/> <br/>


 &nbsp; &#125;
            </div>}
            solution={<div className="p-2">
             contract Structs = &#123; <br/> <br/>

            struct User &#123; <br/>
                &nbsp; address userAddress;<br/>
                &nbsp; string name;<br/>
                &nbsp; uint age;<br/>
                &#125; <br/> <br/>

            User [] public users; <br/> <br/>

            function addUser (<br/>address _address, <br/>string memory _name, <br/> uint _age, ) public &#123; <br/><br/>
                    Person memory person = Person(&#123;<br/>
                    &nbsp; userAddress: _address, <br/>
                    &nbsp; name: _name, <br/>
                    &nbsp; age: _age, <br/>
                    &#125;)<br/>
                    users.push(person); <br/>
                &#125;

&nbsp; &#125;
        </div>}
            />
          },
        ]
    }

]

export const RusReactLinks = [
    {
        name: "Интро",
        text: "Интро",
        dropdowns: [
            {   
                text: "React",
                id: 1,
                content:<div>
                    <h1 className="text-[30px] mb-[15px]">React</h1>
                     <p className="text-[18px]">Добро пожаловать на наш курс React. В отличие от других курсов, он не для новичков.
                     вы должны иметь базовое понимание Html, Css и Javascript, поскольку они являются основными компонентами React. Официальная терминология
                     заключается в том, что React — это библиотека Javascript, но простыми словами это смесь Javascript и Html с некоторым уникальным синтаксисом.

                     </p>
                </div>
            },
        ]
    },
    {
    name: "JSX",
    text: "JSX",
    dropdowns: [
        {
            text: "JSX",
            id: 4,
            content: <div>
                <h1 className="text-[30px] mb-[15px]">JSX</h1>
                <p className="text-[18px] mb-8">Jsx is the front end part of your React application (What the user sees). It is essentially
                Html code with a few differences.   <br/>

                First of all self closing tags. There must be a slash after you name the type. Like this {imgTag}, {selfDiv}.
                Also to asign Css atributes we use className instead of class. As you can see we use camelcase for atributes in JSX which is a difference to HTML
                
                 Otherwise everything is mostly the same as in Html.
                </p>
            </div>
        }
       ]

    },

    {
        name: "Functional Components",
        text: "Компоненты",
        dropdowns: [
            {
                text: "Интро к компонетнам",
                id: 5,
                content: <div>
                    <iframe width="1020" height="630" src="https://www.youtube.com/embed/SAha-XJzcLM?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            },
            {
                text: "Компоненты",
                id: 6,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">
                         Функциональные компоненты
                     </h1>
                     <p className="text-[18px]">Функциональные компоненты создают полноценную веб-страницу React. Они используются
                     чтобы разделить нашу страницу, облегчить повторное использование и сделать код более читабельным. По синтаксису они являются обычной функцией Javascript.
                     Лучше всего писать их в виде стрелочных функций, чтобы учучшить читабельность, но это не влияет на функционал. <br/> Примечание: файл в котором написан код на React должен быть
                     файл .jsx, и вы должны импортировать React в начале файла. Также имя функции должно начинаться с заглавной буквы, иначе
                     будут технические проблемы.
                     <br/><br/>
                     Внутри компонент разделен на две части: javascript и jsx. Внутри компонентов вам нужно создать заявление  return()

                     . Внутри его скобок вы можете написать код Jsx. Это та часть, которую увидит конечный пользователь. Однако все, что выходит за рамки return
                     но внутри компонента должно будет, либо javascript, либо хук React (это будет объяснено позже). Некоторые компоненты, с которыми пользователь
                     не взаимодействует а просто видет не будет иметь javascript, однако, если вы хотите, чтобы пользователь мог нажать на что-то или взаимодействовать со страницей любым другим способом
                     вам понадобится javascript.
                     </p>

                    <img src={React1} alt="React1"/>
                </div>
            },
            {
                text: "Задание 1",
                id: 7,
                content: <ChallengeCard 
                num="1"
                text="Создайте компонент Footer который возвращает через return тег h1."
                solution={<div>
                    {strDiv}Hello from HUB{endDiv}
                </div>}
                />
            },
            {
                text: "Components in apps",
                id: 8,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Как на самом деле используются компоненты</h1>
                     <p className="text-[20px] ml-2">Вы изучили основы компонентов, но как они на самом деле используются? они сделаны
                     как части веб-страницы. Обычно у вас будут компонент App, который служыт только для размещения всех других основных компонентов,
                     но не показывает никакого содержимого самостоятельно. В этих случаях компоненты почти всегда написанны как самозакрывающиеся теги.

                     <br/> <br/> Пример приложения: <br/> <br/>
                     </p>
                     <div className="bg-[#BCCFCF] rounded-[10px] text-[20px]">
                    function App() &#123;
                 
                    <HtmlSh text="<Navbar/>" class="ml-5"/>
                   <HtmlSh text="<Logo/>" class="ml-5"/>
                   <HtmlSh text="<Hero/>" class="ml-5"/>
                   <HtmlSh text="<Info/>" class="ml-5"/>
                   <HtmlSh text="<Screen1/>" class="ml-5"/>
                  <HtmlSh text="<Screen2/>" class="ml-5"/>
                 <HtmlSh text="<Footer>" class="ml-5"/>
                 &nbsp; &#125;
                     </div>
                     <br/>
                     <p className="text-[20px] mt-[15px] мл-2">
                    
                     Здесь вы можете увидеть, как будет выглядеть компонент App хорошо сделанного приложения React, составив каждую важную часть в отдельном файле и компоненте. <br/>
                    
                     Делать это не обязательно, но полезно. Если есть ошибка в одном из компонентов,
                     вам нужно искать ее только в этом компоненте, а не во всем приложении. И это делает ваш код более читабельным и профессиональным.
                     </p>
                </div>
            },
            {
                text:"Задание 2", 
                id: 9,
                content: <ChallengeCard
                    num="2" 
                    text="Создайте функциональный компонент App, который содержит 3 других компонента, называемых Navbar, Welcome и Footer"
                    solution={<div>
                         &nbsp;    function App() &#123;
                 
                 <HtmlSh text="<Navbar/>" class="ml-5"/>
                <HtmlSh text="<Welcome />" class="ml-8"/>
              <HtmlSh text="<Footer>" class="ml-5"/>
              &nbsp; &#125;
                    </div>}
                />
            },
            {
                text: "Component files",
                id: 10,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]">Файлы компонентов</h1>
                     <p className="text-[20px] ml-2">Приложение React состоит из нескольких компонентов и файлов. Рекомендуется хранить один компонент в файле
                         и чтобы файл и компонент имели одинаковое имя. Например, если у вас есть компонент с именем Navbar, файл будет - Navbar.jsx.

                         <br/> <br/> Другой частью приложения является компонент index.jsx, точка входа в ваше приложение. Обычно он называется App.jsx. Однако мы не можем просто использовать
                         компонент в другом файле, мы должны экспортировать и импортировать его.
                     </p>
                     <img src={React2} alt="React2" className="my-5"/>
                     <p className="text-[20px]">Здесь мы экспортируем компонент Test, используя ключевые слова export default. Это позволяет нам использовать этот компонент в других файлах.</p>
                     <img src={React3} alt="React3" className="my-5"/>
                     <p className="text-[20px]">Здесь мы импортируем компонент в файл App.jsx. ./ означает, что компоненты Test и App находятся в одной папке.
                    
                    
                     </p>
                </div>
            },
            {
                text: "Задание 3",
                id:11,
                content: <ChallengeCard 
                num="3"
                text="Создайте компонент Footer и экспортируйте его"
                solution={<div>
                &nbsp; import React from 'react' <br/> <br/>

                &nbsp;const Footer = () =&gt; &#123; <br/>



                &nbsp; return (
                     <HtmlSh text="<div>" class="ml-2"/> &nbsp;Footer  <HtmlSh text="</div>" class="ml-2"/>
                     &nbsp;&nbsp;   &#125;) <br/>


                     &nbsp;&nbsp;export default Footer
                </div>}
                />
            },
            {
                text:"Задание 4",
                id: 12,
                content: <ChallengeCard 
                num="4"
                text="Импортируйте компонент, созданный в предыдущем задании, в компонент App и используйте его."
                challenge={<div>
                     &nbsp; import React from 'react' <br/> <br/>

&nbsp;const App = () =&gt; &#123; <br/>



&nbsp; return (
     <HtmlSh text="<div>" class="ml-2"/> &nbsp;Put component here  <HtmlSh text="</div>" class="ml-2"/>
     &nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default App
                </div>}
                solution={
                    <div>
                         &nbsp; import React from 'react' <br/> 
                         &nbsp; import Footer from './Footer' <br/> <br/>

&nbsp;const App = () =&gt; &#123; <br/>



&nbsp; return (
     <HtmlSh text="<div>" class="ml-2"/> <HtmlSh text="<Footer/>" />  <HtmlSh text="</div>" class="ml-2"/>
     &nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default App
                    </div>
                }
                />
            }
        ]
    },
    
    {
        name: "Внешнии технологии",
        text: "Внешнии технологии",
        dropdowns: [
            {
                text: "Vite",
                id: 13,
                content: <iframe width="1020" height="630" src="https://www.youtube.com/embed/qceQkGHgyxw?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },
            {
                text: "Tailwind css",
                id: 14,
                content: <div><iframe width="1020" height="630" src="https://www.youtube.com/embed/6bR92JmRdeQ?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            },
            {
                text: "Components with Vite",
                id: 15,
                content: <iframe width="1020" height="630" src="https://www.youtube.com/embed/v1dHVH8waMI?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            }
        ]
    },
    {
        name: "Пропсы",
        text: "Пропсы",
        dropdowns: [
            
            {
                text: "Пропсы",
                id: 16,
                content: <iframe width="1020" height="630" src="https://www.youtube.com/embed/_4Gh8cuxzIA?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },
            
            {
                text:"Что такое пропсы?",
                id:17,
                content: <div>
                    <h1 className="text-[30px] mb-[15px]" >What are props?</h1>
                    <p className="text-[20px]">The beauty of React is in its reusability, and props are made just for that.
                    There are some components which are only used once in a web page, but others that are used many times,
                    but are always slightly different. For example we have a component that welcomes a user by saying welcome + the users name. 
                    People have different names so we can't do what we usually did, we have to use props. 

                    <img src={React4} alt="React4" className="my-5"/>

                    We enter props into the function brackets to signify that we will use them. To add a prop we use curly brackets and in them write props.+ the name of the prop (your choice).

                    <img src={React5} alt="React5" className="my-5"/>

                    Here we use the component in the App.jsx file and give a value to the prop called name. If we run this programm we will see 'Welcome John'
                    on the screen.
                    
                    </p>
                </div>
            },
            {
                text:"Challenge 100",
                id: 100,
                content: <ChallengeCard 
                text="Create a button, the text of which comes from props."
                solution={
                    <div>
                         &nbsp; import React from 'react' <br/> <br/>0


&nbsp;const Button = (props) =&gt; &#123; <br/>



&nbsp; return (
     <HtmlSh text="<button>" class="ml-2"/> <HtmlSh text="{props.button}" />  <HtmlSh text="</button" class="ml-2"/>
     &nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Button
                    </div>
                }
                />
            }
        ]
    },
    {
        name: "Project 1",
        text: "Project 1",
        dropdowns: [
            {
                text: "Project brief",
                id: 18,
                content: <div><h1 className="text-[30px] mb-[15px]">Ваш первый проект</h1>
                <p className="text-[20px]">Добро пожаловать в ваш первый проект. Здесь вы будете создавать некоторые компоненты для будущего.
                Создайте приложение vite,  и добавьте в него Tailwindcss. Затем добавьте папку components в папку src. Вы
                будете делать все ваши компоненты там.
                Вот список компонентов, которые вам понадобятся: <br/> <br/>

                 <HtmlSh text="Компонент <Button/>, который возвращает кнопку с некоторыми красивыми стилями на ваш и текст из пропсов."/> <br/>
                 <HtmlSh text="Компонент <Input />, который возвращает <input/>, который принимает тип, заполнитель и имя из реквизита." /> <br/>
                 <HtmlSh text="Компонент <Link />, который возвращает тег a с атрибутом href из пропсов." /> <br/> <br/>

                 Экспортируйте все эти компоненты и импортируйте их в файл App.jsx. Расположите их в любом порядке. <br/> <br/>

                 Удачи!

                    </p>
                </div>
            },
            {
                text: "Решение",
                id: 19,
                content: <> 
                <h1 className="text-[30px] mb-[25px]">Решение</h1>
                <div className="text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px] mb-[50px]">
                    <HtmlSh text="//App.jsx" class="ml-2"/> <br/> 

                      &nbsp; import React from 'react' <br/> 
                         &nbsp; import &#123; Button, Input, Link &#125; from './components' <br/> <br/>

                             &nbsp;const App = () =&gt; &#123; <br/>



                                &nbsp; return (
                             <HtmlSh text="<div>" class="ml-2"/> <HtmlSh text="<Button text= 'Click me' />" class="mx-3"/> 
                             <HtmlSh text="<Link href= 'https://hub-university.com' text='Our website' />"  class="mx-3"/>
                             <HtmlSh text="<Input type='text' placeholder='Enter your name' name='name' />" class="mx-3"/>
                              <HtmlSh text="</div>" class="ml-2"/>
                          &nbsp;&nbsp;   &#125;) <br/>


                               &nbsp;&nbsp;export default App
                </div>

                <div className="text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px] mb-[50px]">
                  
                <HtmlSh text="//Button.jsx" class="ml-2"/> <br/> 

         &nbsp; import React from 'react' <br/> 
 

       &nbsp;const Button = (props) =&gt; &#123; <br/>



          &nbsp; return (
       <HtmlSh text="<button>" class="ml-2"/> <HtmlSh text="{props.text}" />  <HtmlSh text="</button>" class="ml-2"/>
    &nbsp;&nbsp;   &#125;) <br/>


         &nbsp;&nbsp;export default Button
         </div> 

         <div className="text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px] mb-[50px]">
                  
                  <HtmlSh text="//Input.jsx" class="ml-2"/> <br/> 
  
           &nbsp; import React from 'react' <br/> 
   
  
         &nbsp;const Input = (props) =&gt; &#123; <br/>
  
  
  
            &nbsp; return (
         <HtmlSh text="<input type={props.type} name={props.name} placeholder={props.placeholder} />" class="mx-3"/> 
      &nbsp;&nbsp;   &#125;) <br/>
  
  
           &nbsp;&nbsp;export default Input
           </div> 
            
           <div className="text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px] mb-[50px]">
                  
                  <HtmlSh text="//Link.jsx" class="ml-2"/> <br/> 
  
           &nbsp; import React from 'react' <br/> 
   
  
         &nbsp;const Link = (props) =&gt; &#123; <br/>
  
  
  
            &nbsp; return (
         <HtmlSh text="<a href={props.href}>" class="ml-2"/> <HtmlSh text="{props.text}" />  <HtmlSh text="</a>" class="ml-2"/>
      &nbsp;&nbsp;   &#125;) <br/>
  
  
           &nbsp;&nbsp;export default Link
           </div> 

                </>
            }
        ]
    },
    {
        name: "More JSX",
        text: "More JSX",
        dropdowns: [

        ]
    },
    {
        name: "useState",
        text: "useState",
        dropdowns: [
            {
                text: "State",
                id:20,
                content: <div>
               <h1 className="text-[30px] mb-[15px]">Что такое useState</h1>
                 <p className="text-[20px]">Несмотря на то, что React использует Javascript, в некоторых случаях он использует его не так, как вы привыкли.
                 И главное отличие - это переменные. Если у вас есть статическая переменная (та, которая никогда не меняется), то ничего не меняется,
                 но если вы хотите, чтобы переменная изменилась, вам нужно использовать useState. <br/> <br/>

                 Чтобы иметь возможность использовать хук React, такой как useState, вам необходимо импортировать его: <br/> <br/>

                 <HtmlSh text="импорт {useState} из React;" class="bg-[#BCCFCF] rounded-[10px] h-[35px]"/> <br/>

                 Однако у нас уже есть импорт из React, который является самим React, поэтому мы можем их комбинировать: <br/> <br/>

                 <HtmlSh text="import {useState}, React from 'React';" class="bg-[#BCCFCF] rounded-[10px] h-[35px]"/> <br/>

                 Переменная состояния вызывается с помощью useState(). Внутри скобок мы помещаем значение аргумента по умолчанию. Например, у нас есть переменная
                 вызываемый номер, и мы хотим, чтобы значение по умолчанию было равно нулю, тогда мы вызываем useState(0). <br/>
                 Вызов useState возвращает массив с двумя элементами. Значение состояния и функция, которую мы можем использовать для изменения состояния. Функция всегда
                  записывается как set + название состояния, начинающееся с заглавной буквы.
                 Вот как это обычно выглядит: <br/> <br/>

                 <HtmlSh text="const [число, setNumber] = useState(0);" class="bg-[#BCCFCF] rounded-[10px] h-[35px]"/> <br/>

        

                 Внутри компонента это будет выглядеть так: <br/> <br/>

                 <div className="bg-[#BCCFCF] rounded-[10px] mb-5">
                 <HtmlSh text="импортировать React, {useState} из 'реакции' " /> <br/>
   
  
    &nbsp;const Счетчик = () =&gt; &#123; <br/> <br/>

    &nbsp; const [число, setNumber] = useState (0); <br/> <br/>

       &nbsp; возвращаться (
    <HtmlSh text="<div>" class="ml-2"/> <HtmlSh text="{number}"/> <HtmlSh text="</div>" class="ml-2"/>

   
&nbsp;&nbsp; &#125;) <br/>


      &nbsp;&nbsp;счетчик экспорта по умолчанию

                 </div>
                 Однако состояние не обязательно должно быть числом. Это может быть любое значение, которым может быть переменная, то есть это также может быть строковое или логическое значение.
                 </p>   
                </div>

            },
            {
                text: "Challenge",
                id: 21,
                content: <ChallengeCard 
            text="Add a useState named word with a default value of an empty string. Display the value in the return statement."
            challenge={  <div className="bg-[#BCCFCF] rounded-[10px] mb-5">
            <HtmlSh text="import React from 'react' " />  <br/> 


&nbsp;const Words = () =&gt; &#123; <br/> <br/>



  &nbsp; return (



 ) <br/>


 &nbsp;&nbsp;export default Words

            </div>}
            solution={  <div className="bg-[#BCCFCF] rounded-[10px] mb-5">
            <HtmlSh text="import React, {useState} from 'react' " />  <br/> 


&nbsp;const Words = () =&gt; &#123; <br/> <br/>

&nbsp;  const  [word, setWord] = useState(""); <br/> <br/>

  &nbsp; return (
<HtmlSh text="<div>" class="ml-2"/> <HtmlSh text="{word}"/>  <HtmlSh text="</div>" class="ml-2"/>


&nbsp;&nbsp;   &#125;) <br/>


 &nbsp;&nbsp;export default Words

            </div>}
                />
            },
            
            {
               text: "How to change state",
               id: 22,
               content: <div>
                <h1 className="text-[30px] mb-[15px]">Changing State</h1>
                <p className="text-[20px]">
                    We have looked at what state is and how to implement it, but we don't yet know how to change it. But to do that 
                    we will first learn the onClick atribute. For a button to do something you need to be able to click it. Inside 
                    onClick we call a function, usually a callback function. 

                    <HtmlSh text="<button onClick={() => console.log('There has been a click')}> Click  </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-5" />

                    Here we have a simple button that returns a sentence to the console every time a button is clicked. It is a callback function in
                    curly brackets. But this button isn't very useful. Lets try changing the state with it. For that we will use our setNumber function taught
                    we created previously. To asign a new value to the number value we need to input the value into the brackets of the state function.
                    <HtmlSh text="<button onClick={() => setNumber(1)}> Click me </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-5" />
                    But this also isn't useful on it's own as we are simply asigning a value to the state. But what is we want the value to increment by one on every click.
                    <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-5" />

                    In this case we are adding 1 to the current value of number, meaning that it will increase every time we test the button. You can test this 
                    yourself to be certain. <br/>
                    A complete component would look like this:

                    <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Count = () =&gt; &#123; <br/> <br/>

   &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>

      &nbsp; return (
        <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Count

                </div>
                
                </p>
               </div>
            },
            {
                text: "Challenge 9",
                id: 23,
                content: <ChallengeCard 
                text="Make it so that when you click the button it returns 'Welcome to our webpage' in the console"
                challenge={ <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Welcomer = () =&gt; &#123; <br/> <br/>


      &nbsp; return (
        <HtmlSh text="<button> Welcome </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Welcomer

                </div>}
                solution={<div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Welcomer = () =&gt; &#123; <br/> <br/>


      &nbsp; return (
        <HtmlSh text="<button onClick={() => console.log('Welcome to our webpage)}> Welcome </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Welcomer

                </div>}
                />
            },
            {
                text: "Challenge 10",
                id: 24,
                content: <ChallengeCard 
                text="Use the component Count from the previous lesson and add a decrement button which decreases the value of number by 1.
                "
                challenge={
                    <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Count = () =&gt; &#123; <br/> <br/>

   &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>

      &nbsp; return (
        <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Count

                </div>}

                solution={
                    <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Count = () =&gt; &#123; <br/> <br/>

   &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>

      &nbsp; return (
        <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
        <HtmlSh text="<button onClick={() => setNumber(number - 1)}> Decrement </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
     
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Count

                </div>}
                />
            },
            {
                text:"Challenge 11",
                id: 25,
                content: <ChallengeCard 
                text="Add a reset button to this component which resets the number state to 0"
                challenge={ <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
   
  
   &nbsp;const Count = () =&gt; &#123; <br/> <br/>

   &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>

      &nbsp; return (
        <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
        <HtmlSh text="<button onClick={() => setNumber(number - 1)}> Decrement </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
       
&nbsp;&nbsp;   &#125;) <br/>


     &nbsp;&nbsp;export default Count

                </div>}
                solution={
                    <div className="bg-[#BCCFCF] rounded-[10px] my-5">
                    <HtmlSh text="import React, {useState} from 'react' " />  <br/> 
       
      
       &nbsp;const Count = () =&gt; &#123; <br/> <br/>
    
       &nbsp;  const  [number, setNumber] = useState(0); <br/> <br/>
    
          &nbsp; return (
            <HtmlSh text="<button onClick={() => setNumber(number + 1)}> Increment </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
            <HtmlSh text="<button onClick={() => setNumber(number - 1)}> Decrement </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
            <HtmlSh text="<button onClick={() => setNumber(0)}> Reset </button" class="bg-[#BCCFCF] rounded-[10px] h-[35px] my-2" />
    &nbsp;&nbsp;   &#125;) <br/>
    
    
         &nbsp;&nbsp;export default Count
    
                    </div>
                }
                />
            }
        ]
    }

]

