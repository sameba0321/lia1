<script lang="ts">
    import image from "./iStock-1394513236.jpg"
    import image2 from "./utmaningar-inom-rekrytering.png"
    </script>
    
    <div>
        <img src={image} alt="" width="250px">
        <img src={image2} alt="" width="250px">
       
       
        
    </div>
    
    <style>
        div{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            place-self: center center;
            gap: 5em;
           
        }
    </style>