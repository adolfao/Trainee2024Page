import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Coisas <GradientText>maneiras</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Tenho uma gata chamada Ariel"
        description="Olha o tanto que ela é maravilhosa. O nome dela foi em homenagem
        ao meu professor Muriel da faculdade."
        link="/"
        img={{
          src: '/assets/images/ariri.jpg',
          alt: 'Project Web Design',
        }}
      />
      <Project
        name="Torço para um time sem torcedores"
        description="Sempre que encontro alguém que assiste futebol, eles falam que nunca viram um
        americano (quem torce pro américa é americano, muito paia). Viu? Eu sou raro."
        link="/"
        img={{ src: '/assets/images/escudo.png', alt: 'Project Fire' }}
      />
      <Project
        name="Já ganhei o campeonato regional de Valorant pela faculdade"
        description="Ganhei o E-JIA pela Hunter, atlética de e-sports da faculdade.
        Ganhei uma medalha, um aperto de mão e um parabéns pelo título."
        link="/"
        img={{ src: '/assets/images/valorant.png', alt: 'Project Maps' }}
      />
    </div>
  </Section>
);

export { ProjectList };
