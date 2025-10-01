import { IssueStatus } from '@prisma/client';
import { Badge } from '@radix-ui/themes';
import React from 'react';

type AllowedColors = 'red' | 'violet' | 'green';

const STATUS_MAP: Record<IssueStatus, { label: string; color: AllowedColors }> =
  {
    OPEN: { label: 'Open', color: 'red' },
    IN_PROGRESS: { label: 'In progress', color: 'violet' },
    CLOSED: { label: 'Closed', color: 'green' },
  };

const IssueStatusBadge = ({ status }: { status: IssueStatus }) => {
  return (
    <Badge color={STATUS_MAP[status].color}>{STATUS_MAP[status].label}</Badge>
  );
};

export default IssueStatusBadge;
