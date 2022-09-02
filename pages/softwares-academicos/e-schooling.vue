<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title="'Sistema de Gestão Académica eSchooling'"
      :columns-template="'2fr 1fr'"
      :button-action-text="'Agenda a sua reunião'"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        Aposte numa plataforma de gestão académica criada a pensar nos
        professores e estudantes, com acesso fácil de qualquer dispositivo, que
        tem desde o registo de sumários até aos planos curriculares de curso;
        desde os horários à gestão das matrículas; desde os pagamentos online
        até ao registo de notas.
        <img
          style="display: block; margin-top: 15px"
          src="https://edudigital.pt/home/images/eschooling-branco.png"
          width="130"
          alt=""
        />
      </template>
    </Banner>

    <VantagemServicos
      :id="'hosting-gerido-servicos-vantagens'"
      :vantagens="vantagens"
      :background="'#fff'"
      :color="'#616161'"
      :title="'Serviços e Vantagens'"
    />

    <Contactform />
  </div>
</template>

<script>
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
import SoftwareAcademicoController from '~/controllers/SoftwareAcademicoController'
export default {
  components: { VantagemServicos, Contactform },
  data() {
    return {
      vantagens: SoftwareAcademicoController.eSchooling.vantagens,
    }
  },
}
</script>

<style></style>
