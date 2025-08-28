"use client"
import { ModalWindow } from "@/shared/components/ModalWindow";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/form";
import { toast } from "sonner";
import { RegistrationSchema } from "@/shared/schemas/registrationSchema";
import { RegistrationFormData } from "@/shared/types/registration";

const RegistrationPage = () => {
    const form = useForm<z.infer<typeof RegistrationSchema>>({
        resolver: zodResolver(RegistrationSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
        }
    })

    const onSubmit = (data: RegistrationFormData) => {
        toast(`Form is submitted with data: 
            first name: ${data.firstName},
            last name: ${data.lastName},
            email: ${data.email}`
        )
    }

    return (
        <div className={'flex justify-center py-3'}>
            <ModalWindow
                buttonName={'Registration'}
                title={'Registration form'}
                body={
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className={'flex flex-col gap-4'}
                        >
                            <fieldset className={'space-y-2'}>
                                <legend className={'text-sm text-gray-500'}>Please, fill the data</legend>
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>First name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="First name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Last name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Last name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </fieldset>
                            <Button
                                type={'submit'}
                                className={'w-1/2'}
                            >
                                Register
                            </Button>
                        </form>
                    </Form>
                }
            />
        </div>
    )
}

export default RegistrationPage;
