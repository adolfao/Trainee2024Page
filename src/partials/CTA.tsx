import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Se inscreva no meu <GradientText>Newsletters</GradientText>
        </>
      }
      description="Basta colocar o seu e-mail na caixa ao lado para receber notícias, dicas e muito mais!"
    />
  </Section>
);

export { CTA };
