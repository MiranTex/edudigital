<template>
    <Section class="section-double" :id="id" :background="background">
        <template>

            <div>
                <slot name="text"></slot>
            </div>
            <div>
                <slot name="cartoon">
                    <img width="500" :src="img" alt="" srcset="">
                </slot>

            </div>
        </template>
    </Section>
</template>

<script>
import Section from './section.vue';
export default {
    props: ["id", "img", "background"],
    components: { Section }
}
</script>

<style scoped lang="scss">
    .section-double{
        display: flex;

        flex-direction: row;


        div{
            flex: 1;
            padding: 20px;
        }
    }

    @media screen and (max-width:900px) {
        .section-double{
            flex-direction: column!important;
        }
    }
</style>