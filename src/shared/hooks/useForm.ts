"use client";

import { FormEvent, useState } from "react";
import { Toast } from "../services/notificationService";
import {
  createProperty,
  editProperty,
} from "@/properties/actions/properties-actions";
import { Property } from "../interfaces/IProperty";
import { redirect } from "next/navigation";

export const useForm = (
  errMsg = "",
  succMsg = "",
  userId: string = "",
  defaultState: Property
) => {
  const [value, setValue] = useState(defaultState);

  const onCreateProperty = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createProperty(value, userId);

      Toast.fire({
        icon: "success",
        title: errMsg,
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: succMsg,
      });
    }
    redirect("/properties/my-properties");
  };

  const onEditProperty = async (e: FormEvent) => {
    e.preventDefault();

    if (userId !== defaultState?.userId) {
      Toast.fire({
        icon: "error",
        title: "You can't edit a property that is not belonged to you.",
      });
      return;
    }

    try {
      await editProperty(value, defaultState.id || "");

      Toast.fire({
        icon: "success",
        title: errMsg,
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: succMsg,
      });
    }
    redirect("/properties/my-properties");
  };

  return {
    value,
    setValue,
    onCreateProperty,
    onEditProperty,
  };
};
