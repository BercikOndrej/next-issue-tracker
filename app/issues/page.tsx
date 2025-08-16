'use client';

import { Button } from '@radix-ui/themes';
import React from 'react';

const IssuesPage = () => {
  return (
    <div>
      <Button onClick={() => console.log('New issue')}>Create issue</Button>
    </div>
  );
};

export default IssuesPage;
