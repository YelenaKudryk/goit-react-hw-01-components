import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  padding-top: ${p => p.theme.spacing(2)};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radius.normal};
`;

export const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(1)};
`;

export const ProfileImg = styled.img`
  width: 150px;
  border-radius: ${p => p.theme.radius.round};
`;

export const ProfileText = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ProfileTextTag = styled.p`
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ProfileTextLocation = styled.p`
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ProfileStat = styled.ul`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(4)};
  border-top: ${p => p.theme.borders.normal};
`;

export const StatItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};
`;

export const StatItemsName = styled.span`
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatItemsQuan = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
