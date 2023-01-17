import styled from '@emotion/styled';

export const FriendListItemCard = styled.li`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radius.normal};
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radius.round};
  background-color: ${p =>
    p.isOnline ? p.theme.colors.green : p.theme.colors.red};
`;

export const FriendName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
