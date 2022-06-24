import { Paper, Group, Stack, Text, Title, Box } from "@mantine/core";
import IconGroup from "../../../components/VehicleCard/IconGroup";
import { TbReceipt2 } from "react-icons/tb";
import { GiCarDoor, GiHeavyBullets } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

const VehiclePaper: React.FC<{
  vehicle: { make: string; name: string; price: number; seats: number; doors: number; weapons: boolean };
}> = ({ vehicle }) => {
  return (
    <>
      <Paper shadow="xs" p="md" withBorder sx={(theme) => ({ width: "100%", backgroundColor: theme.colors.dark[6] })}>
        <Stack sx={{ width: "100%" }}>
          <Group position="apart" noWrap>
            <Title order={4}>{`${vehicle.make} ${vehicle.name}`}</Title>
            {vehicle.weapons && <GiHeavyBullets fontSize={20} />}
          </Group>
          <Group position="apart">
            <IconGroup label={vehicle.price} Icon={TbReceipt2} />
            <Group>
              <IconGroup label={vehicle.seats} Icon={MdAirlineSeatReclineNormal} />
              <IconGroup label={vehicle.doors} Icon={GiCarDoor} />
            </Group>
          </Group>
        </Stack>
      </Paper>
    </>
  );
};

export default VehiclePaper;
