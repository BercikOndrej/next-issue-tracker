'use client';

import { Button, Heading, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';

const CreateIssuePage = () => {
  return (
    <div>
      <Heading className=''>Create new issue</Heading>
      <div className='space-y-4 mt-6 max-w-xl'>
        <TextField.Root placeholder='Issue title' />
        <TextArea placeholder='Issue description' />
        <Button>Create</Button>
      </div>
    </div>
  );
};

export default CreateIssuePage;
