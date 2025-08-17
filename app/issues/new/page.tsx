'use client';

import { Button, Heading, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface FormData {
  title: string;
  description: string;
}

const CreateIssuePage = () => {
  const { handleSubmit, control } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      await fetch('/api/issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      router.push('/issues');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Heading>Create new issue</Heading>
      <form
        className='space-y-4 mt-6 max-w-xl'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name='title'
          control={control}
          render={({ field }) => (
            <TextField.Root
              placeholder='Title'
              value={field.value ?? ''}
              onChange={(e) =>
                field.onChange((e.target as HTMLInputElement).value)
              }
              onBlur={field.onBlur}
            />
          )}
        />

        <Controller
          name='description'
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        />
        <Button>Create</Button>
      </form>
    </div>
  );
};

export default CreateIssuePage;
