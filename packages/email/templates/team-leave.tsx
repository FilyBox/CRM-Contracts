// import { msg } from '@lingui/core/macro';
// import { useLingui } from '@lingui/react';
// import { Trans } from '@lingui/react/macro';
import { formatTeamUrl } from '@documenso/lib/utils/teams';

import { Body, Container, Head, Hr, Html, Img, Preview, Section, Text } from '../components';
// import { useBranding } from '../providers/branding';
import { TemplateFooter } from '../template-components/template-footer';
import TemplateImage from '../template-components/template-image';

export type TeamLeaveEmailProps = {
  assetBaseUrl: string;
  baseUrl: string;
  memberName: string;
  memberEmail: string;
  teamName: string;
  teamUrl: string;
};

export const TeamLeaveEmailTemplate = ({
  assetBaseUrl = 'http://localhost:3002',
  baseUrl = 'https://lpm.com',
  memberName = 'John Doe',
  memberEmail = 'johndoe@lpm.com',
  teamName = 'Team Name',
  teamUrl = 'demo',
}: TeamLeaveEmailProps) => {
  // const { _ } = useLingui();
  // const branding = useBranding();

  const previewText = `A team member has left a team`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body className="mx-auto my-auto font-sans">
        <Section className="bg-white text-slate-500">
          <Container className="mx-auto mb-2 mt-8 max-w-xl rounded-lg border border-solid border-slate-200 p-2 backdrop-blur-sm">
            <TemplateImage
              assetBaseUrl={assetBaseUrl}
              className="mb-4 h-6 p-2"
              staticAsset="logo.png"
            />

            <Section>
              <TemplateImage
                className="mx-auto"
                assetBaseUrl={assetBaseUrl}
                staticAsset="delete-user.png"
              />
            </Section>

            <Section className="p-2 text-slate-500">
              <Text className="text-center text-lg font-medium text-black">
                {memberName || memberEmail} left the team {teamName}
              </Text>

              <Text className="my-1 text-center text-base">
                {memberEmail} left the following team
              </Text>

              <div className="mx-auto my-2 w-fit rounded-lg bg-gray-50 px-4 py-2 text-base font-medium text-slate-600">
                {formatTeamUrl(teamUrl, baseUrl)}
              </div>
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

export default TeamLeaveEmailTemplate;
