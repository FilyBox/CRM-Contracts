// import { msg } from '@lingui/core/macro';
// import { useLingui } from '@lingui/react';
// import { Trans } from '@lingui/react/macro';
import { Body, Container, Head, Hr, Html, Img, Link, Preview, Section, Text } from '../components';
import { useBranding } from '../providers/branding';
import { TemplateFooter } from '../template-components/template-footer';
import type { TemplateResetPasswordProps } from '../template-components/template-reset-password';
import { TemplateResetPassword } from '../template-components/template-reset-password';

export type ResetPasswordTemplateProps = Partial<TemplateResetPasswordProps>;

export const ResetPasswordTemplate = ({
  userName = 'User',
  userEmail = 'lucas@lpm.com',
  assetBaseUrl = 'http://localhost:3002',
}: ResetPasswordTemplateProps) => {
  // const { _ } = useLingui();
  // const branding = useBranding();

  const previewText = `Password Reset Successful`;

  const getAssetUrl = (path: string) => {
    return new URL(path, assetBaseUrl).toString();
  };

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body className="mx-auto my-auto bg-white font-sans">
        <Section>
          <Container className="mx-auto mb-2 mt-8 max-w-xl rounded-lg border border-solid border-slate-200 p-4 backdrop-blur-sm">
            <Section>
              <Img src={getAssetUrl('/static/logo.png')} alt="logo" className="mb-4 h-6" />

              <TemplateResetPassword
                userName={userName}
                userEmail={userEmail}
                assetBaseUrl={assetBaseUrl}
              />
            </Section>
          </Container>

          <Container className="mx-auto mt-12 max-w-xl">
            <Section>
              <Text className="my-4 text-base font-semibold">
                Hi, {userName}{' '}
                <Link className="font-normal text-slate-400" href={`mailto:${userEmail}`}>
                  ({userEmail})
                </Link>
              </Text>

              <Text className="mt-2 text-base text-slate-400">
                We've changed your password as you asked. You can now sign in with your new
                password.
              </Text>
              <Text className="mt-2 text-base text-slate-400">
                Didn't request a password change? We are here to help you secure your account, just{' '}
                <Link className="text-documenso-700 font-normal" href="mailto:hi@documenso.com">
                  contact us.
                </Link>
              </Text>
            </Section>
          </Container>

          <Hr className="mx-auto mt-12 max-w-xl" />

          <Container className="mx-auto max-w-xl">
            <TemplateFooter isDocument={false} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default ResetPasswordTemplate;
