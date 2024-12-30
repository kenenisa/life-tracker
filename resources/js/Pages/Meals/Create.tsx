import React, { useState } from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Welcome() {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    calories: "",
    protein: "",
    fat: "",
    carbs: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.post("/Meals", formState);
  };

  return (
    <DefaultLayout>
      <Head title='Welcome' />
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle>Create Meal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    placeholder='Name of your meal'
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='grid w-full gap-1.5'>
                  <Label htmlFor='description'>Description</Label>
                  <Textarea
                    id='description'
                    placeholder='Type your description here.'
                    value={formState.description}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='calories'>Calories</Label>
                  <Input
                    id='calories'
                    placeholder='Calories'
                    value={formState.calories}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='protein'>Protein</Label>
                  <Input
                    id='protein'
                    placeholder='Protein'
                    value={formState.protein}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='fat'>Fat</Label>
                  <Input
                    id='fat'
                    placeholder='Fat'
                    value={formState.fat}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='carbs'>Carbs</Label>
                  <Input
                    id='carbs'
                    placeholder='Carbs'
                    value={formState.carbs}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <CardFooter className='flex justify-between mt-4'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() =>
                    setFormState({
                      name: "",
                      description: "",
                      calories: "",
                      protein: "",
                      fat: "",
                      carbs: "",
                    })
                  }
                >
                  Cancel
                </Button>
                <Button type='submit'>Add Meal</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
}
