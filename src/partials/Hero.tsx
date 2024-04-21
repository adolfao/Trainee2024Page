import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Opa, tudo bem? Eu sou o <GradientText>Adolfo</GradientText> 👋
        </>
      }
      description={
        <>
          Tenho 20 anos e sou do interior de Minas Gerais, agora eu
          sou estudante de engenharia de computação na UTFPR, em Apucarana,
          sou torcedor do América mineiro (sim) 
          e gosto muito de animais, astronomia e jogos online, principalmente valorant.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src='/assets/images/COELHO.png'
          alt="Avatar image"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
