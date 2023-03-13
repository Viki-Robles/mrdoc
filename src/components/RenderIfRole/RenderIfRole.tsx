import React, { Fragment, ReactNode } from "react";
import { useUserContext } from "../../providers/AuthProvider";
import { MrDocRoles } from "../../types/mrDocRoles";

export interface RenderIfRoleProps {
  roles: MrDocRoles[];
  children: ReactNode;
}

export const RenderIfRole = ({
  roles,
  children,
}: RenderIfRoleProps): JSX.Element | null => {
  const { role } = useUserContext();
  const providedRolesMatchUserRole = role && roles.includes(MrDocRoles[role]);

  if (providedRolesMatchUserRole) {
    return <Fragment>{children}</Fragment>;
  }
  return null;
};
