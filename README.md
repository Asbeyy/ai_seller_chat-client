# AI Bot for ECOMMERCE

This a proof of concept for an AI Bot, for a personal AI shopper: suggesting products  based on your customer needs, requests, likes, or simply chatting to see what's available with preview in chat, add to cart.

The idea is that the AI has a list of your products, example JSON here

```js
 {
   id: "1",
   name:"product A",
   caracteristics:{
      color: "red",
      size: "XL",
      sex: "f",
      material: "cotton",
      type: "t-shirt",
      subtype: "long sleeves"
   },
   ASKU: '[product-id-1]'
   }
```


Feeding this info, the chatbot will consume the caracteristics, and will be able to correctly reply to input requests.
By associating a ASKU (AI STOCK KEEPING UNIT.. yes i just invented that 🤣) the AI will point the item suggested just by replying in plane text it's ASKU code. The filtering function (Described underneath) is designed to recognize the presence of any ASKU code within the text  and convert it to a DIV or Element for preview (or anything else really)



This bot  can listen to your customer preferences or needs, and suggests accurate producsts based on those info. Not only
but in the live chat the bot's suggestion will be rendered as a clickable preview card, redirecting the user to the product page; the AI can also add to the cart, thus having a personal shop assistant. 


## The text filtering function

By providing the text string to this function, it will separate the text from ASKU code, that  we will 
use to recognize where to place the formatted text and which information it carries. as the formatted text into element
is a rendered component, we can for instance expand and add a fetch request to get data from a database to fill up the preview card

EX. ASKU = 143030 -> fetch on db item with ID 143030 and then render the result.


Normal text will be renderd as normal text, but the regex setup will
recognize the ASKU and will replace that, by an element (product suggested by the AI and it gives a preview element that is clickable to diretcly go to the product page or adds it to the cart instead of the customer)


```js
    function formatText(text: string) {
        const regex = /\[product-xb-"(\d+)"\]/g;
        const parts = text.split(regex);
        const formatted = parts.map((part, index) => {
          if (index % 2 === 0) {
            return part;
          } else {
            const productNumber = regex.exec(text)![1];
            return  (
              <a href={`/products/${productNumber}`}>
                <div className='product-test' key={index}>
                  {productNumber}
                </div>
              </a>
            );
          }
        });
  
        
        return <>{formatted}</>
    }
```








- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# ai_seller_chat-client
# ai_seller_chat-client
