
import { useEffect, useState } from 'react'

const products_list = [
  {
    id: "1",
    name:"product A",
    caracteristics:{
        color: "red",
        size: "XL",
        sex: "f",
        material: "wool",
        type: "shirt",
        subtype: "long sleeves",
        foto: 'https://bybrand.it/wp-content/uploads/2016/01/T-shirt-Bambino-Valueweight-Fruit-of-The-Loom-FR610330.jpg'
    },
    ASKU: '[product-xb-1]'
    },
    {
      id: "2",
      name:"product B",
      caracteristics:{
          color: "red",
          size: "XL",
          sex: "f",
          material: "wool",
          type: "t-shirt",
          subtype: "shor sleeves"
      },
      ASKU: '[product-xb-2]'
    },
    {
      id: "3",
      name: "product C",
      characteristics: {
          color: "blue",
          size: "M",
          sex: "m",
          material: "cotton",
          type: "jeans",
          subtype: "regular fit"
      },
      ASKU: '[product-xb-3]'
  },
  {
      id: "4",
      name: "product D",
      characteristics: {
          color: "green",
          size: "S",
          sex: "f",
          material: "silk",
          type: "dress",
          subtype: "evening gown"
      },
      ASKU: '[product-xb-4]'
  },
  {
      id: "5",
      name: "product E",
      characteristics: {
          color: "black",
          size: "L",
          sex: "m",
          material: "leather",
          type: "jacket",
          subtype: "biker"
      },
      ASKU: '[product-xb-5]'
  },
  {
      id: "6",
      name: "product F",
      characteristics: {
          color: "yellow",
          size: "S",
          sex: "f",
          material: "cotton",
          type: "blouse",
          subtype: "short sleeves"
      },
      ASKU: '[product-xb-6]'
  },
  {
      id: "7",
      name: "product G",
      characteristics: {
          color: "white",
          size: "M",
          sex: "m",
          material: "linen",
          type: "shirt",
          subtype: "long sleeves"
      },
      ASKU: '[product-xb-7]'
  },
  {
      id: "8",
      name: "product H",
      characteristics: {
          color: "purple",
          size: "L",
          sex: "f",
          material: "silk",
          type: "blouse",
          subtype: "sleeveless"
      },
      ASKU: '[product-xb-8]'
  },
  {
      id: "9",
      name: "product I",
      characteristics: {
          color: "brown",
          size: "XL",
          sex: "m",
          material: "wool",
          type: "sweater",
          subtype: "v-neck"
      },
      ASKU: '[product-xb-9]'
  },
  {
      id: "10",
      name: "product J",
      characteristics: {
          color: "red",
          size: "S",
          sex: "f",
          material: "cotton",
          type: "t-shirt",
          subtype: "short sleeves"
      },
      ASKU: '[product-xb-10]'
  },
  {
      id: "11",
      name: "product K",
      characteristics: {
          color: "blue",
          size: "L",
          sex: "m",
          material: "denim",
          type: "jeans",
          subtype: "slim fit"
      },
      ASKU: '[product-xb-11]'
  },
  {
      id: "12",
      name: "product L",
      characteristics: {
          color: "pink",
          size: "M",
          sex: "f",
          material: "silk",
          type: "dress",
          subtype: "casual"
      },
      ASKU: '[product-xb-12]'
  }
  ]

function MessageCard(props: {message: string, who: {sender: string, index: number, length: number}}){
    const [typed, setTyped] = useState('')

    useEffect(()=>{
      if (props.who.sender === 'ai') {
        if (props.who.index === props.who.length){
          //simulateTyping(props.message)
          setTyped(props.message) // convert array to string
          return
        }
        setTyped(props.message)
      }
      if (props.who.sender === 'user') {
        setTyped(props.message)
        scrolltoBottom()
      }
    },[])



    /**
     * By providing the text string to this function, it will separate the text from special characters, that  we will 
     * use to recognize where to format the text. normal text will be renderd as normal text, but the regex setup will
     * recognize the special characters and will replace that, by an element (ex. now a div with class product-test to
     * emulate that it could be a produc suggested by the AI and it gives a preview element that is clickable to diret
     *  cly go to the product page)
     */
    function formatText(text: string) {
        const regex = /\[product-xb-(\d+)\]/g;
        const parts = text.split(regex);
        const formatted = parts.map((part, index) => {
          if (index % 2 === 0) {
            return part;
          } else {
            const productNumber = regex.exec(text)![1];
            return  ( <CardItemAI key={index} productNumber={productNumber}/>);
          }
        });
  
        
        return <>{formatted}</>
    }
    function CardItemAI(props:any){

      const [productInfo, setProductInfo] = useState({})

      useEffect(()=>{
        const productNumber = props.productNumber
        const product = products_list.find(product => product.id === productNumber)
        console.log(product)
        setProductInfo(product)
      },[])

      return(
        <a href={`/products/${props.productNumber}`}>
                <div className='product-test' key={props.productNumber}>
                 {productInfo.name}
                </div>
              </a>
      )
    
    }
    function scrolltoBottom(){
      const messageContainer = document.querySelector('.message-container') as HTMLDivElement | null;
      if (!messageContainer) return
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        left: 0
      });
    }

    return(
        <div className={`message-box-container ${props.who.sender === 'ai' ? '' : 'container-message-human'}`}>
          <div className="message-box-hero">
            {formatText(typed)}
          </div>
        </div>
    )
}





  export default MessageCard