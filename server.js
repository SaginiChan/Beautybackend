const express =require('express')
const app =express()


const users =[
    {id:0, 
       name:'Criss-Cross Goddess Braids', 
       stylist:'Bruce Wayne',
        imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2013/11/1-long-curvy-goddess-braids.jpg?resize=500%2C625&ssl=1',
         description:'Perfect for days when you want to give your hair a break or when you are going on a beach vacation', 
         duration:'200', 
         Pricekshs:'4000'},

       {id:1, 
         name:'Dynamic Side-Swept Cornrows', 
        stylist:'Clark-Kent', 
        imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/1-asymmetrical-side-cornrows.jpg?w=496&ssl=1',
        description:'Once the hair is in the braid, it is free of heat and manipulation for weeks on end. Plus, it’s really cute and there are endless designs to express yourself',
         duration:'210',
         Pricekshs:'3000'},

    {id:2, 
       name:'Long Chunky Black Braids', 
    stylist:'Clark-Kent', 
    imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/3-african-american-thick-and-thin-braids.jpg?w=468&ssl=1', 
    description:'Once the hair is in the braid, it is free of heat and manipulation for weeks on end. Plus, it’s really cute and there are endless designs to express yoChunky box braids are totally in style. With alternating thin braids, the hairdo feels very hot', 
    duration:'110',
    Pricekshs:'6000'},

    {id:3, 
       name:' Feed-In Braids', 
    stylist:'Amy Adams',
    imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/11-blonde-cornrows-for-black-hair.jpg?w=451&ssl=1',
     description:'Once the hair is in the braid, it is free of heat and manipulation for weeks on end. Plus, it’s really cute and there are endless designs to express yoChunky box braids are totally in style. With alternating thin braids, the hairdo feels very hot',
      duration:'110',
      Pricekshs:'6000'},
   
    {id:4, 
       name:' Feed-In Braids', 
    stylist:'Amy Adams',
    imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/11-blonde-cornrows-for-black-hair.jpg?w=451&ssl=1',
     description:'Perfect for days when you want to give your hair a break or when you are going on a beach vacation',
      duration:'200',
      Pricekshs:'4000'},
    
    {id:5, 
       name:'Long Monster Black Braids', 
    stylist:'Bruce Wayne',
    imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2013/11/1-long-curvy-goddess-braids.jpg?resize=500%2C625&ssl=1',
     description:'Cornrow hairstyles look more natural and less bulky by creating a narrow and flat point at the hairline',
      duration:'180',
      Pricekshs:'4090'},
   
    {id:6, 
       name:'Messy Hawk for Women', 
    stylist:'Clark-Kent',
    imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/3-african-american-thick-and-thin-braids.jpg?w=468&ssl=1', 
    description:'today’s mohawks are much cooler than this and are ideal for both men and women. Long and messy is a fun new way to update the classic Mohawk concept',
    duration:'20',
    Pricekshs:'4000'},
   
    {id:7, 
       name:' Temple Fade for Natural Hair', 
    stylist:'Hayley Williams',
    imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2014/12/4-natural-fade-with-line-up.jpg?resize=500%2C542&ssl=1', 
    description:'This men’s cut is a great choice if you want to have short and manageable hair with natural texture',
     duration:'40',
     Pricekshs:'4200'},
   
    {id:8,  
      name:'The Side Part Cut', 
    stylist:'Emma Watson',
    imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/3-african-american-thick-and-thin-braids.jpg?w=468&ssl=1',
     description:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/12/15-the-side-partcut.jpg?resize=500%2C574&ssl=1',
      duration:'200',
      Pricekshs:'6800'},
   
    {id:9, 
       name:'Braided Ponytail', 
    stylist:'Diana Prince',
    imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/6-cornrows-with-a-ponytail.jpg?w=482&ssl=1', 
    description:'A cornrow ponytail is great for a casual updo that won’t pull on your edges',
     duration:'160',
     Pricekshs:'2900'},
   
    {id:10, 
       name:' Designed Mohawk Hair', 
    stylist:'Clark-Kent',
    imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/1500x/womens-mohawks/12-womens-mohawk-with-carved-designs.jpg?w=461&ssl=1', 
    description:' The curvy lines and triangles created in this look are super cool',
     duration:'90',
     Pricekshs:'7990'},

    {id:11, 
       name:'Smart Style', 
    stylist:'Clark-Kent',
    imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2013/11/1-long-curvy-goddess-braids.jpg?resize=500%2C625&ssl=1', 
    description:'The smart boys cut is extremely versatile and can be styled with lightweight smoothing',
     duration:'70',
     Pricekshs:'9800'},
   
    {id:12,  
      name:'Buzz Cut with High Fade', 
    stylist:'Hayley Williams',
    imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2014/12/7-short-natural-line-up-with-fade.jpg?resize=500%2C500&ssl=1',
     description:'For the bearded guys out there, have your hair fade out near your temples and fade back in towards the jawline',
      duration:'200',
      Pricekshs:'4000'},
    
    {id:13, 
       name:'Curly Hairstyle with Crochet Braids', 
    stylist:'Clark-Kent',
    imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/10-tree-braids-with-highlights.jpg?w=479&ssl=1',
     description:'You can wear the hair down or up in a ponytail', 
     duration:'80',
     Pricekshs:'5400'},

     {id:14, 
      name:' Half Cornrows Half Individual Braids', 
   stylist:'Diana Prince',
   imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/14-creative-braided-hairstyle-for-black-women.jpg?w=485&ssl=1',
    description:'Braided hairstyles for black women are very creative and versatile', 
    duration:'40',
    Pricekshs:'6400'},

    {id:15, 
      name:' BraidHeartbeat Babes', 
   stylist:'Hayley Williams',
   imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/1500x/womens-mohawks/2-teal-and-blue-mohawk.jpg?w=464&ssl=1',
    description:'Mohawk hairstyles that will get your heart racing, try the style donning the heartbeat symbol', 
    duration:'200',
    Pricekshs:'8000'},

    {id:16, 
      name:' Braided Tower', 
   stylist:'Diana Prince',
   imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/1500x/womens-mohawks/7-womens-mohawk-with-undershave.jpg?w=477&ssl=1',
    description:'This is a style that will work perfectly for the lucky ones with thick, coarse hair that stays in place', 
    duration:'160',
    Pricekshs:'980'},

    {id:17, 
      name:' Textured Hairstyle for Fine Hair', 
   stylist:'Bruce Wayne',
   imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/12/8-pompadour-with-taper-fade.jpg?resize=500%2C500&ssl=1',
    description:'full of texture and movement, perfect for men who seek a current style with short styling time', 
    duration:'126',
    Pricekshs:'3600'},

    {id:18, 
      name:'Bed Head Honey', 
   stylist:'Hayley Williams',
   imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/1500x/womens-mohawks/9-honey-blonde-pixie-undercut.jpg?w=489&ssl=1',
    description:'low maintenance kind of gal, this is the mohawk that will take you from the sheets to the streets', 
    duration:'100',
    Pricekshs:'1400'},

    {id:19, 
      name:' Upside Down Braids to Bun', 
   stylist:'Amy Adams',
   imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/20-box-braids-with-beads.jpg?w=469&ssl=1',
    description:'Super sleek and bold, go with upright braids. Have the cornrows lead into either a ponytail or a bun', 
    duration:'130',
    Pricekshs:'4300'},

    {id:20, 
      name:'Triangle Box Braids', 
   stylist:'Diana Prince',
   imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2013/11/1-long-curvy-goddess-braids.jpg?resize=500%2C625&ssl=1',
    description:' It’s unexpected, cool and gives the classic box braid a totally fresh feel', 
    duration:'50',
    Pricekshs:'4800'},

    {id:21, 
      name:'Glamorous Mohawk Updo', 
   stylist:'Bruce Wayne',
   imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/1500x/womens-mohawks/9-low-mohawk-updo-with-messy-braids.jpg?w=462&ssl=1', 
   description:'or girls in need of a unique style for a night out (or a bold way to style a day time dress', 
   duration:'271',
    Pricekshs:'7040'},

    {id:22, 
      name:'Curled-Over Pomp Hairstyle', 
   stylist:'Hayley Williams',
   imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2014/12/16-pompadour-for-receding-hairline.jpg?resize=500%2C500&ssl=1',
    description:'You can smooth back your new pompadour, wear it high, or let it fall to a side', 
    duration:'200',
    Pricekshs:'8700'},

    {id:23, 
      name:'Long Cuvy Black Braids', 
   stylist:'Bruce Wayne',
   imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2013/11/1-long-curvy-goddess-braids.jpg?resize=500%2C625&ssl=1',
    description:'Perfect for days when you want to give your hair a break or when you are going on a beach vacation', 
    duration:'200',
    Pricekshs:'4000'},

    {id:24, 
      name:'Large High Bun with a Headband', 
   stylist:'Amy Adams',
   imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/14-large-high-bun-with-a-headband.jpg?w=500&ssl=1',
    description:'Perfect for days when you want to give your hair a break or when you are going on a beach vacation', 
    duration:'200',
    Pricekshs:'4000'},

    {id:25, 
      name:'Long Curvy Godess Braids', 
   stylist:'Bruce Wayne',
   imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2013/11/1-long-curvy-goddess-braids.jpg?resize=500%2C625&ssl=1',
    description:'This style overlaps three separate sections in a bun to add visual interest', 
    duration:'100',
    Pricekshs:'6030'},

    {id:26, 
      name:'Cute Jumbo Twist Braids', 
   stylist:'Clark-Kent',
   imagelink:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/12-thick-long-twists-braids.jpg?w=471&ssl=1',
    description:'Perfect for days when you want to give your hair a break or when you are going on a beach vacation', 
    duration:'200',
    Pricekshs:'4000'},

    {id:27, 
      name:'Two Cornrow Boxer Braids', 
   stylist:'Amy Watson',
   imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/1500x/black-braided-hairstyles/16-two-black-feed-in-braids.jpg?w=496&ssl=1',
    description:'These absolutely look like your own hair, especially if you choose braiding hair that matches in hue', 
    duration:'290',
    Pricekshs:'9800'},

    {id:28, 
      name:' Micro Twist Ponytail', 
   stylist:'Bruce Wayne',
   imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2016/12/1-long-caramel-brown-micro-twists.jpg?resize=500%2C636&ssl=1',
    description:'This type of style allows the wearer to forgo much of the maintenance required with non-braided hairstyles', 
    duration:'80',
    Pricekshs:'2300'},

    {id:29, 
      name:' Rebellious Hairstyle for Curly Hair', 
   stylist:'Bruce Wayne',
   imagelink:'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2014/12/2-chris-galya%E2%80%99s-rebellious-hairstyle-for-curly-hair.jpg?resize=500%2C750&ssl=1',
    description:'Micro twists are just like hair only polished, manageable, of the desired length and color', 
    duration:'89',
    Pricekshs:'9070'},

    {id:30, 
      name:'Side Swept Twists with Beads', 
   stylist:'Bruce Wayne',
   imagelink:'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2016/12/2-thin-twist-braids.jpg?resize=500%2C625&ssl=1',
    description:'if you want to add even more spice, consider adding in tiny-shiny embellishments for extra bling', 
    duration:'40',
    Pricekshs:'5000'},

]


const posts =[
    {id:1,  name:'Post1'},
    {id:2,  name:'Post2'},
    {id:3,  name:'Post3'},
    {id:4,  name:'Post4'},
    {id:5,  name:'Post5'},
    {id:6,  name:'Post6'},
    {id:7,  name:'Post7'},
    {id:8,  name:'Post8'},
    {id:9,  name:'Post9'},
    {id:10,  name:'Post10'},
    {id:11,  name:'Post11'},
    {id:12,  name:'Post12'},
    {id:13,  name:'Post13'},
    {id:14,  name:'Post14'}

]

app.get('/posts',paginatedResults(posts),(req,res)=>{
    res.json(res.paginatedResults)
})


app.get('/users', paginatedResults(users), (req, res) => {
    res.json(res.paginatedResults)
  })

  function paginatedResults(model) {
    return  (req, res, next) => {
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)
  
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
  
      const results = {}
  
      if (endIndex < model.length) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
      }
        
    
       
      
       results.results= model.slice(startIndex,endIndex)

         res.paginatedResults= results
         next()
    }
}

app.listen(3000)