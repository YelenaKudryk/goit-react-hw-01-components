import styled from '@emotion/styled';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primaryText};
`;
