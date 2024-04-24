# for each state file
    # for each county in that file
        # for each level
            # iterate over each team in <level>.json and track the closest distance
            # track the closest team for each level

        # once all closest team in each level is found, write each team ID in app/api/counties/states/<state>
        # for those 5 teams (MLB, AAA, AA, A+, A), calculate the order of those teams and store that in the same file

import json
import os
import math

class County:
    def __init__(self, name, fips_id, mlb, aaa, aa, h_a, a, order):
        self.name = name
        self.fips_id = fips_id
        self.mlb = mlb
        self.aaa = aaa
        self.aa = aa
        self.h_a = h_a
        self.a = a
        self.order = order

    def toJSON(self):
        return json.dumps(
            self,
            default=lambda o: o.__dict__, 
            sort_keys=True,
            indent=4)

class Point:
    def __init__(self, lat: float, lon: float) -> None:
        self.lat = lat
        self.lon = lon

class TeamDistance:
    def __init__(self, team_id: str, distance: float) -> None:
        self.team_id = team_id
        self.distance = distance

class ClosestTeams:
    def __init__(self, fips_id) -> None:
        self.fips_id = fips_id
        self.mlb = TeamDistance('x', float('inf'))
        self.aaa = TeamDistance('x', float('inf'))
        self.aa = TeamDistance('x', float('inf'))
        self.h_a = TeamDistance('x', float('inf'))
        self.a = TeamDistance('x', float('inf'))

    def __str__(self) -> str:
        return f"{self.fips_id}\n{self.mlb.team_id, self.mlb.distance}\n{self.aaa.team_id, self.aaa.distance}\n"

    def getDistanceByLevel(self, level: str):
        if level == 'MLB':
            return self.mlb
        elif level == 'AAA':
            return self.aaa
        elif level == 'AA':
            return self.aa
        elif level == 'A+':
            return self.h_a
        elif level == 'A':
            return self.a
        else:
            raise Exception(f'Unkown level {level}')
        
    def setDistanceByLevel(self, level: str, distance: float, team_id: str):
        if level == 'MLB':
            self.mlb.team_id = team_id
            self.mlb.distance = distance
        elif level == 'AAA':
            self.aaa.team_id = team_id
            self.aaa.distance = distance
        elif level == 'AA':
            self.aa.team_id = team_id
            self.aa.distance = distance
        elif level == 'A+':
            self.ha.team_id = team_id
            self.ha.distance = distance
        elif level == 'A':
            self.a.team_id = team_id
            self.a.distance = distance
        else:
            raise Exception(f'Unkown level {level}')

# finding distance uing the Havershine Formula
def distance_between_two_points(point_a: Point, point_b: Point):
    radius_of_earth = 6372.8 # kilometers

    lat_diff = math.radians(point_b.lat - point_a.lat)
    lon_diff = math.radians(point_b.lon - point_a.lon)

    lat_a_radians = math.radians(point_a.lat)
    lat_b_radians = math.radians(point_b.lat)

    central_angle = math.sin(lat_diff/2)**2 + math.cos(lat_a_radians) * math.cos(lat_b_radians) * math.sin(lon_diff/2)**2

    distance = (math.asin(math.sqrt(central_angle)) * 2) * radius_of_earth

    return distance


# finds the order of teams for a county based on the distance
def find_order(teams: ClosestTeams):
    order = []

    return order

def main():

    states_path = os.path.join(os.path.dirname(__file__), "states")
    levels_path = os.path.join(os.path.dirname(__file__), "levels")

    states_dir = os.listdir(states_path)
    levels_dir = os.listdir(levels_path)

    output_path = os.path.dirname(__file__)

    for state in states_dir:
        print(f'------{state}------')
        state_file = open(f"{states_path}/{state}")
        counties = json.load(state_file)
        state_counties = []

        for county in counties:
            print(f'------{county}------')
            county_point = Point(county['latitude'], county['longitude'])
            closest_teams = ClosestTeams(fips_id=county['fips_id'])

            for level in levels_dir:
                if level not in ['MLB.json', 'AAA.json']:
                    continue
                print(f'------{level}------')
                level_title = level.strip('.json')
                level_file = open(f"{levels_path}/{level}")
                teams = json.load(level_file)

                for team in teams:
                    # calculate distance between team and county
                    team_point = Point(team['latitude'], team['longitude'])
                    distance = distance_between_two_points(county_point, team_point)

                    if distance < closest_teams.getDistanceByLevel(level_title).distance:
                        closest_teams.setDistanceByLevel(level_title, distance, team['team_id'])

                level_file.close()

            # TODO
            # all closest teams have been calculated for a county
            # now we want to sort those 5 teams
            order = find_order(closest_teams)
            county_data = County(county['county'], county['fips_id'], closest_teams.mlb.team_id, closest_teams.aaa.team_id, closest_teams.aa.team_id, closest_teams.h_a.team_id, closest_teams.a.team_id, order)
            state_counties.append(county_data.toJSON())
            
        with open(f'{output_path}/output/{state}', "w") as output_file:
            for line in state_counties:
                output_file.write(line)

        state_file.close()


if __name__ == '__main__':
    main()







whatcom = {
    'mlb': ['']
}