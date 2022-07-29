<template>
  <div>
    <Section :id="'cont'" :fluid="true" :noPadding="true">
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perspiciatis cupiditate nobis deserunt minus? Repellat
         ducimus at natus consequuntur rerum voluptatibus modi cum, obcaecati quidem quas maxime corporis sint temporibus.

      </p>
    </div>
    
    <div>
      
      <Googlemap />
    </div>
    </Section>
    
    
    <contactform />
  </div>
</template>

<script>
import contactform from '~/components/contactform.vue'
export default {
  components: { contactform },

}
</script>

<style socped lang="scss">
#cont{
    div{
      flex: 1;
    }
  }
</style>